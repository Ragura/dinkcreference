# title_end

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void title_start(void)</Prototype>

`title_end()` defines the end of a title section of a choice statement. Everything following [title_start()](./title-start.md) up until `title_end()` will be interpreted as the choice statement's title. It should always exist within [choice_start()](./choice-start.md) and [choice_end()](./choice-end.md) commands.
