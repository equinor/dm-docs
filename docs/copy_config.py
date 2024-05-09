"""Copy and auto-generate documentation from dm-core-plugins package to docosaurus project."""
import os
import json
import shutil
import pathlib
from textwrap import dedent

DESTINATION_BASE_FOLDER = './docs/libraries/@development-framework/dm-core-plugins'
SOURCE_BASE_FOLDER = './node_modules/@development-framework/dm-core-plugins/blueprints'


def path_to_title(path: str) -> str:
    """Get title from filepath."""
    return path.rsplit("/", 1)[-1].replace("_", " ")


def create_json_code_block(title, filetype, code):
    """Create json code-block to use in mdx doc-files"""
    return f"""```json title="{title}.{filetype}.json" \n{json.dumps(code, indent=2)} \n```"""


def create_code_blocks_section(example_config):
    """Create mdx code block for recipe, entity and blueprints"""
    child_blueprints = ""
    if "childBlueprints" in example_config:
        for child_blueprint in example_config["childBlueprints"]:
            child_blueprints += create_json_code_block(child_blueprint["name"], "blueprint", child_blueprint)

    code_block = dedent(f"""
{create_json_code_block(example_config["recipe"]["name"], "recipe", example_config["recipe"])}
{create_json_code_block(example_config["blueprint"]["name"], "blueprint", example_config["blueprint"])}
{child_blueprints}
{create_json_code_block(example_config["entityFilePrefix"], "entity", example_config["entity"])}
""")
    return code_block


def create_info_block(example_config):
    """Create text block for description and/or note"""
    additional_info = ""
    if example_config["description"]:
        additional_info += example_config["description"]
    if example_config["note"]:
        additional_info += dedent(f"""
        :::note
        
        {example_config["note"]}
        
        :::
        """)
    return additional_info


def create_demo_block(example_config):
    """Create block for demo example or note if not available"""
    if example_config["showDemo"]:
        return f"<PluginExample exampleConfig={{{json.dumps(example_config)}}} />"
    return dedent("""
        :::note
        
        No demo available for this example.
        
        :::
        """)


def create_example_files(config, destination_folder_path, base_source_path) -> None:
    """Create example files from json config imported from dm-core-plugins"""

    files = [os.path.basename(x) for x in pathlib.Path().glob(f'{base_source_path}/Examples/*.json')]
    plugin_name = config["name"]
    if files:
        # Create Examples folder
        folder_path = os.path.join(destination_folder_path, "Examples")
        try:
            os.makedirs(folder_path, exist_ok=True)
        except IOError as make_dir_error:
            print(f"Unable to create Examples folder for plugin {plugin_name}. {make_dir_error}")

        # Create example docs
        for example in files:
            # Create example file
            example_file_source_path = f"{base_source_path}/Examples/{example}"
            try:
                with open(example_file_source_path, 'r', encoding="utf-8") as example_source_file:
                    example_config = json.load(example_source_file)
                with open(f'{folder_path}/{example}.mdx', 'a+', encoding="utf-8") as example_destination_file:
                    plugin_demo = dedent(f"""\
---
title: {example_config['title']}
---

import {{ PluginExample }} from '@site/src/components'

{create_info_block(example_config)}

{create_demo_block(example_config)}

{create_code_blocks_section(example_config)}
""")

                    example_destination_file.write(plugin_demo)
            except IOError as write_example_error:
                print(f"Unable to write docs file for {example}. {write_example_error}")


def create_blueprints_file(doc_config, destination_folder, base_source_path):
    """
    Combine all blueprints for one plugin and pass to BlueprintPreview component
    """

    destination_filepath = f"{destination_folder}/Blueprints.mdx"

    with open(destination_filepath, 'w+') as destination_file:
        destination_file.write("---\nsidebar_position: 0\n---\n\n")

    blueprints = list()

    for blueprint in doc_config["blueprints"]:
        try:
            with open(f'{base_source_path}/{blueprint}', 'r') as source_file:
                blueprints.append(json.load(source_file))
        except IOError as e:
            print(f"Asked to import {blueprint}, but source could not be found in dm-core-plugins docs. {e}")

    try:
        with open(destination_filepath, 'a+') as destination_file:
            blueprints_file_content = dedent(
                f"""                import {{ BlueprintPreview }} from "@site/src/components"
                
                <BlueprintPreview blueprints={{{json.dumps(blueprints)}}} />
                """)
            destination_file.write(blueprints_file_content)
    except IOError as e:
        print(f"Unable to write blueprints file for {doc_config['name']}. {e}")


def copy_doc_files(docs_config, base_source_path, destination_folder_path):
    """
    Copy all md/mdx docs for plugins from dm-core-plugins package.
    Adds docosaurus meta for ordering and title.
    """

    plugin_name = docs_config["name"]
    documentation_file_oath = f"{base_source_path}/Documentation.md"

    try:
        with open(documentation_file_oath, 'r') as doc_source_file:
            contents = doc_source_file.read()
            try:
                with open(f'{destination_folder_path}/Documentation.md', 'a+') as destination_file:
                    header_content = dedent(f"""            ---
                    sidebar_position: 1
                    title: {plugin_name}
                    sidebar_label: Documentation
                    ---\n\n""")
                    destination_file.write(header_content + contents)
            except IOError as e:
                print(f"Unable to write docs file for {plugin_name}. {e}")
    except IOError:
        print(f"No documentation source file found for plugin {plugin_name}")


def create_docs():
    """
    Create docs
    - Create folder structure for plugin documentation
    - Copy doc files (md, mdx) from dm-core-plugins package for each plugin
    - Create examples (blueprint, entity, recipe code blocks + live demo) from 
      custom json-config stored in dm-core-plugins
    """
    try:
        with open("./plugin-docs-import-config.json", "r") as f:
            plugins = json.load(f)

        if os.path.exists(DESTINATION_BASE_FOLDER):
            shutil.rmtree(DESTINATION_BASE_FOLDER)

        for plugin, info in plugins.items():
            # Define the source and destination paths
            plugin_name = info["name"]
            folder = info.get('folder') or plugin
            base_source_path = f'{SOURCE_BASE_FOLDER}/{folder}'
            docs_source_path = f'{base_source_path}/docs/{plugin}' if "folder" in info else f'{base_source_path}/docs'
            destination_folder_path = f'{DESTINATION_BASE_FOLDER}/{plugin_name}'
            os.makedirs(os.path.join(destination_folder_path, plugin_name), exist_ok=True)

            # Generate example files based on config files in dm-core-plugins
            create_example_files(info, destination_folder_path, docs_source_path)

            # Create Blueprints file
            create_blueprints_file(info, destination_folder_path, base_source_path)

            # Copy docs and add docusaurus config at the top based on config
            copy_doc_files(info, docs_source_path, destination_folder_path)
            
    except IOError as e:
        print(f"Could not find config file plugin-docs-import-config.json for documentation migration {e}")


create_docs()
