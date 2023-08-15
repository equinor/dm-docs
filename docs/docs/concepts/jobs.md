---
title: Jobs
sidebar_position: 6
---

In the development framework, a "job" is a python script that will run and produce some result. Often, the python script will save the result of a job to an entity stored in DMSS. Jobs can be handled with [dm-job](https://github.com/equinor/dm-job).

This is an API where you can:
- Start jobs
- Stop jobs
- Request the status for a running job
- Get result from a job


If your custom application want to run a job using dm-job, you have to 
1) Create a JobHandler python file for your job.
2) Create a job entity for the job of type `dmss://WorkflowDS/Blueprints/Job`. The job entity you create must be available in dmss, for example by uploading your job entity with the document add DMSS endpoint.
3) Start running the job: this is done by calling the "start" endpoint in the dm-job API with the address to the job entity as a URL parameter.



## JobHandler file
The JobHandler file (`__init__.py`) has the following structure:

```python
_SUPPORTED_TYPE = "dmss://DataSource/apps/MySignalApp/models/SignalGeneratorJob"


class JobHandler(JobHandlerInterface):
    def __init__(self, job: Job, data_source: str):
        super().__init__(job, data_source)
        self.headers = {"Access-Key": job.token}

    def start(self) -> str:
        # Code for running the job

    def remove(self) -> Tuple[str, str]:
        # Remove a job

    def progress(self) -> Tuple[JobStatus, str]:
        # Poll progress from the job instance
        

    def result(self) -> Tuple[str, bytes]:
        # Code for returning the response from a job.

```




A few important things to note:
- A defined variable called `_SUPPORTED_TYPE` decides what JobHandler to use for a given job entity. 
This is the same as the runner type in the job entity.
- The JobHandlerInterface and Job class are defined in dm-job repository.
- To access the job entity, use `self.job.entity`
- - `self.job.entity.applicationInput` is used for supplying inputs to the job. For example, you can include inputs to calculations.
- - `self.job.entity.outputTarget` is used for defining where the result of the job should be stored.
- The file must have name `__init__.py`


Also, the file must be available as a file in the dm-job container.
For example, if you want to add a new job to the [dm-core-packages repository](https://github.com/equinor/dm-core-packages), you would create your JobHandler file inside the dm-core-packages repository and make it available for the dm-job API.¨¨

This can be achieved by using docker volumes. 
For example, in the [docker-compose file in dm-core-packages](https://github.com/equinor/dm-core-packages/blob/main/example/docker-compose.yaml), 
docker volume is used to "copy" the content of `dm-core-packages/example/job_handlers` into the folder `dm-job/src/job_handler_plugins`.


## Job entity
To run a job, you must define a job entity. Example:
```json
{
    "label": "Example local container job",
    "type": "dmss://WorkflowDS/Blueprints/Job",
    "status": "Not started",
    "triggeredBy": "author",
    "outputTarget": "dmss://DataSource/$456-456.result",
    "applicationInput": {
      "type": "dmss://system/SIMOS/Reference",
      "referenceType": "link",
      "address": "dmss://DataSource/$123-123"
    },
    "runner": {
      "type": "dmss://DataSource/apps/MySignalApp/models/SignalGeneratorJob"
    },
    "started": "Not started"
  }
```
The most important attributes: 
- status: what is the status of the job: registered, not starting, running, failed, completed, removed or unknown. 
- triggeredBy: who started the job
- outputTarget: defines where to place the result of the job after the job is complete. Normally an address to some entity.
- applicationInput: is a link reference to another entity that can be of any type (but have to be an object). This is an entity that is sent in with the job, so this entity is directly available  
inside the start() function in the JobHandler file.
- runner: Has information needed to run the job. For example what container image to use, environment variables and so on. The type of this attribute should extend from `dmss://WorkflowDS/Blueprints/JobHandler`. 
- started: the time when the job is started.


## Different kinds of jobs

Jobs are divided into two main categories, based of how they are executed:
- locally in the instance / deployment of the dm-job API, either as a "container job" or a "regular job". For container jobs, the job entity's runner type should extend from the  `Container` blueprint from dm-job. For regular jobs, the job entity's runner type should extend from the `JobHandler` blueprint from dm-job.
- Azure container jobs. In this case, the job entity's runner type should extend from `AzureContainer´ blueprint in dm-job. 

Note: Azure jobs are recommended for jobs that take a long time to complete, since Azure jobs can be started and run in the background.  

## Azure container jobs
Azure container jobs runs in container instances in Azure.

To make the azure job connect with azure, some environment variables needs to be set in the docker container for dm-job.
-  AZURE_SP_SECRET: This Service principal secret can be found in the app registration `Marine Analyis Framework Data Modelling Tool`. Note that the secret should have a maximum time to live of 1 year. 
- AZURE_JOB_SUBSCRIPTION: ID for subscription, 14d57366-b2ae-4da8-8b75-e273c6fdabe2
- AZURE_JOB_RESOURCE_GROUP: dmt-test-containers
- AZURE_JOB_TENANT_ID: 3aa4a235-b6e2-48d5-9195-7fcf05b459b0
- AZURE_JOB_CLIENT_ID: 97a6b5bd-63fb-42c6-bb75-7e5de2394ba0

For local testing, the resource group that holds the deployed container instance for a job is called `dmt-test-containers`. This resoruce group is found in the subscription S398-DataModellingTool.

(Note: to get access to this resource group, you must first go to the Azure portal -> Privileged Identity Management -> My roles -> Azure resources and activate the role for the S398 subscription).



When running jobs in Azure, the JobHandler file (`__init__.py`) needs some additional code.

A template can be found [in dm-job](https://github.com/equinor/dm-job/blob/main/src/job_handler_plugins/azure_container_instances/__init__.py).
