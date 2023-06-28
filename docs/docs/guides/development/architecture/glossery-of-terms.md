# Glossary of terms (ubiquitous language)

(alphabetically sorted)

* Blueprint: Data model. A generic way of describe data. It describes data structure in a language and technology agnostic way. There are no methods defined in a blueprint, it only describes the structure of the data.
* Entity: The actual data.
* Recipe: Configuration for how to store, view, migrate data. Recipes needs to have a context, that is the plugin to be used and in what application. Different applications have different recipes.
* Plugins: A plugin is an implementation that receives a recipe and the actual data, and make decisions based on a recipe. Plugins exists for UI, and storage.