 # NB! change the path to your own config.json file
 # NB! needs jq installed to be able to run this command: https://github.com/jqlang/jq/wiki/Installation


 docker run -it --env-file=.env -e "CONFIG=$(cat /Users/KKJE/Projects/Equinor/dm-docs/search_index_generation/config.json | jq -r tostring)" algolia/docsearch-scraper