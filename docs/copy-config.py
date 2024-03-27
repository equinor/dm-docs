
import os

plugins = {
    "header": {"config": ["HeaderPluginConfig.json"]},
    "grid": {"config": ["GridPluginConfig.json"]},
    "data_grid": {"config": ['DataGridPluginConfig.json']},
    "form": {"config": ["FormFunctionalityConfig.json"]},
    "list": {"config": ["ListPluginConfig.json", "FunctionalityConfig.json"]},
    "media_viewer": {"config": ["MediaViewerConfig.json"]},
    "publish" : {"config": ["PublishConfig.json"]}, 
    "responsive_grid": {"config": ["ResponsiveGridPluginConfig.json", "ColumnSize.json", "RowItem.json", "ColumnItem.json"]},
    "role_filter": {"config": ["RoleFilterConfig.json"]},
    "stack": {"config": ["StackPluginConfig.json"]},
    "table": {"config": ["TablePluginConfig.json", "TableFunctionalityConfig.json", "TableColumnConfig.json", "TableVariantConfig.json"]},
    "tabs": {"folder": "view_selector", "config": ["ViewSelectorConfig.json", "ViewSelectorItem.json", "RecipeSelectorConfig.json"]},
    "sidebar": {"folder": "view_selector", "config": ["ViewSelectorConfig.json", "ViewSelectorItem.json", "RecipeSelectorConfig.json"]},
    "job_create": {"folder": "job", "config": ["CreateConfig.json"]},
    "job_control": {"folder": "job", "config": ["ControlConfig.json"]}
}




def config_path_to_header_name(path: str) -> str: 
    return path.rsplit("/", 1)[-1]


for plugin, configs in plugins.items(): 
    # Define the source and destination paths
    folder = configs.get('folder') or plugin
    destination_path = f'./docs/libraries/plugins/{plugin}/{plugin.title().replace("_", "")}Config.md'
    os.makedirs(os.path.dirname(destination_path), exist_ok=True)
    with open(destination_path, 'w+') as destination_file:  
        destination_file.write("")

    for config in configs["config"]: 
        source_path = f'./node_modules/@development-framework/dm-core-plugins/blueprints/{folder}/{config}'
        # Read the contents from the source file
        try:
            with open(source_path, 'r') as source_file:
                contents = source_file.read()
            with open(destination_path, 'a+') as destination_file:  
                separation = f"# {config_path_to_header_name(source_path)}\n"
                destination_file.write(separation + f"```json\n{contents}```\n\n")
            print("Contents appended successfully.")
        except IOError as e:
            print(f"Unable to process file. {e}")