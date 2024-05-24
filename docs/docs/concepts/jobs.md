---
title: Jobs
sidebar_position: 6
---

Jobs are used to isolate the domain and application specific software and infrastructure, away from the core Development Framework system. 

Jobs are therefore isolated pieces of software, that are made to take a single entity as input, and create a single entity as an output.
They are often domain specific, can be implemented in any programming language, and run on totally different infrastructure than the rest of the Development Framework.
A good way of distributing and running jobs are in _containers_.

A concrete _job_ in the development framework, is an entity of the `dmss://WorkflowDS/Blueprints/Job`-blueprint.
These entities must be stored in DMSS, and can then be triggered by sending a request to the DM-Job API.


DM-Job is an API where you can:
- Start jobs
- Stop jobs
- Request the status for a running job
- Get result from a job

## Job entity
To run a job, you must create a job entity. Example:
```json
{
  "type": "dmss://WorkflowDS/Blueprints/Job",
  "label": "Fetch Signals from OmniaTS",
  "status": "not started",
  "outputTarget": "dmss://MSDS",
  "applicationInput": {
    "type": "dmss://system/SIMOS/Reference",
    "referenceType": "link",
    "address": "~.~.~.sce"
  },
  "runner": {
    "type": "JOBCORE:AzureContainer",
    "containerImage": "simpos-omniats",
    "environmentVariables": [
      "OMNIA_TIMESERIES_BASE_URL=https://api.gateway.equinor.com/plant/timeseries/v1.7",
      "OMNIA_TIMESERIES_TEST_CLIENT_ID=67d****"
    ]
  }
}
```

- status: What is the status of the job: registered, not starting, running, failed, completed, removed or unknown. 
- triggeredBy: Who started the job
- outputTarget: Defines where to place the result of the job after the job is complete. Normally an address to some entity in DMSS
- applicationInput: A link reference to another entity that can be of any type (but have to be an object)
- runner: An object that defines which JobPlugin should handle the job. The blueprint for this entity may define any attributes needed to configure the job. This will vary depending on the JobPlugin used

### JobPlugins available by default
- Local bash shell (execute a bash script in the same environment as the DM-Job API)
- Azure Container Instances (run a container in Azure)
- Local container (run a container on the same machine as the DM-Job API)
- Omnia Classic Azure Container (run a container in Azure with access to Equinor internal network)
- Radix (run a job on the Equinor PaaS platform Radix)

For details on adding a new JobPlugin, see [here](https://github.com/equinor/dm-job?tab=readme-ov-file#job-handler-plugins)


## Recurring jobs

The DM-Job API has support for executing any jobs on a recurring schedule.
To register a recurring job:
1. Create an entity of the `dmss://WorkflowDS/Blueprints/RecurringJob`- blueprint
2. Set the `applicationInput`-attribute to the job that should be executed 
3. Use the default recurring job handler "dmss://WorkflowDS/Blueprints/RecurringJobHandler" as `"runner"`
4. Set a `"schedule"`
5. Save it in DMSS and start it as a normal job

Example:
```json
{
    "type": "dmss://WorkflowDS/Blueprints/RecurringJob",
    "label": "Fetch Signals from OmniaTS",
    "status": "not started",
    "applicationInput": {
      "type": "dmss://WorkflowDS/Blueprints/Job",
      "label": "Fetch Signals from OmniaTS",
      "status": "not started",
      "outputTarget": "dmss://MSDS",
      "applicationInput": {
        "type": "dmss://system/SIMOS/Reference",
        "referenceType": "link",
        "address": "~.~.~.sce"
      },
      "runner": {
        "type": "JOBCORE:AzureContainer",
        "containerImage": "simpos-omniats",
        "environmentVariables": [
          "OMNIA_TIMESERIES_BASE_URL=https://api.gateway.equinor.com/plant/timeseries/v1.7",
          "OMNIA_TIMESERIES_TEST_CLIENT_ID=67d****"
        ]
      }
    },
    "runner": {
      "type": "dmss://WorkflowDS/Blueprints/RecurringJobHandler"
    },
    "schedule": {
      "type": "dmss://WorkflowDS/Blueprints/CronJob",
      "cron": "30 */1 * * *",
      "runs": []
    }
```
