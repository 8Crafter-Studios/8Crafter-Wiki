---
title: Particle Customization
nav_order: 1
description: How to make customized particles using the add-on.
mentions:
    - Andexter8
---

<template-MoreImages />

With this add-on you can also customize particles by setting their molang variables, this allows for a lot more particle customization then is currently available with the /particle command. To do this you must use the andexdb:createParticle /scriptevent command.

Command format: `/scriptevent andexdb:createParticle <x: float|~>|<y: float|~>|<z: float|~>|[action: action]...`{lang=acmd}

### \[action: action\]

`<actionType: actionType>:<molangVariable>:<newValue: float|R:G:B|R:G:B:A|x:y:z>`{lang=acmd}

Action Types:

**setFloat: / f:**

newValue format: `<float: float>`{lang=acmd}

**setColorRGB: / rgb:**

newValue format: `<r: float>|<g: float>|<b: float>`{lang=acmd}

**setColorRGBA: / rgba:**

newValue format: `<r: float>|<g: float>|<b: float>|<a: float>`{lang=acmd}

**setVector3: / v3:**

newValue format: `<x: float>|<y: float>|<z: float>`{lang=acmd}

This add-on also has some custom particles that are made specifically to be used with this command:

Show/hide Custom Added Particles

**andexdb:block_destruct_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.emitter_texture_coordinate_u: the horizontal position of the uv
-   variable.emitter_texture_coordinate_v: the vertical position of the uv
-   variable.emitter_texture_size_u: the horizontal size of the uv
-   variable.emitter_texture_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting

\***\*andexdb:custom_block_texture_billboard\*\***

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.uv_range_u: the range of horizontal position of the uv
-   variable.uv_range_v: the range of vertical position of the uv
-   variable.uv_size_range_u: the range of horizontal size of the uv
-   variable.uv_size_range_v: the range of vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.color_range_r: the range of red color tinting
-   variable.color_range_g: the range of green color tinting
-   variable.color_range_b: the range of blue color tinting
-   variable.color_range_a: the range of alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.size_range_x: the range of x size
-   variable.size_range_y: the range of y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_radius_x: the x emitter radius
-   variable.emitter_radius_y: the y emitter radius
-   variable.emitter_radius_z: the z emitter radius
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_block_texture_billboard_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_item_texture_billboard**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_item_texture_billboard_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_text_ascii_sga_texture_billboard_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_text_glyph_E0_texture_billboard_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_text_glyph_E1_texture_billboard_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_text_glyph_E3_texture_billboard_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

**andexdb:custom_text_texture_billboard_2**

Molang Variables:

-   variable.emitter_intensity: the cube root of the amount of particles
-   variable.uv_u: the horizontal position of the uv
-   variable.uv_v: the vertical position of the uv
-   variable.uv_size_u: the horizontal size of the uv
-   variable.uv_size_v: the vertical size of the uv
-   variable.color.r: the red color tinting
-   variable.color.g: the green color tinting
-   variable.color.b: the blue color tinting
-   variable.color.a: the alpha color tinting
-   variable.direction_x: the x facing direction
-   variable.direction_y: the y facing direction
-   variable.direction_z: the z facing direction
-   variable.size_x: the x size
-   variable.size_y: the y size
-   variable.emitter_offset_x: the x emitter offset
-   variable.emitter_offset_y: the y emitter offset
-   variable.emitter_offset_z: the z emitter offset
-   variable.emitter_direction_x: the emitter x facing direction
-   variable.emitter_direction_y: the emitter y facing direction
-   variable.emitter_direction_z: the emitter z facing direction
-   variable.max_lifetime: the amount of time before the particle disappears

Here are some examples of this command (these are the ones that are showcased in the YouTube trailer video):

`/scriptevent andexdb:createParticle minecraft:block_destruct|~~2~2|overworld|setColorRGBA:color:0.5:0.25:0:1|setFloat:variable.EmitterTextureCoord.u:32|setFloat:variable.EmitterTextureCoord.v:32|setFloat:variable.EmitterTextureSize.u:32|setFloat:variable.EmitterTextureSize.v:32|setFloat:emitter_radius:0.2|setFloat:emitter_intensity:10`{lang=mccmd}\
`/scriptevent andexdb:createParticle andexdb:custom_block_texture_billboard|~0.5~1.5~0.5|overworld|setColorRGBA:color:1:1:1:1|setFloat:variable.uv_u:0|setFloat:variable.uv_v:0|setFloat:variable.uv_size_u:5000|setFloat:variable.uv_size_v:5000|setFloat:variable.direction_x:0.0|setFloat:variable.direction_y:0.0|setFloat:variable.direction_z:1.0|setFloat:variable.max_lifetime:1000.0|setFloat:variable.size_y:0.5|setFloat:variable.size_x:1`{lang=mccmd}\
`/scriptevent andexdb:createParticle andexdb:custom_item_texture_billboard|~0.5~1.5~0.5|overworld|setColorRGBA:color:1:1:1:1|setFloat:variable.uv_u:0|setFloat:variable.uv_v:0|setFloat:variable.uv_size_u:1000|setFloat:variable.uv_size_v:1000|setFloat:variable.direction_x:0.0|setFloat:variable.direction_y:0.0|setFloat:variable.direction_z:1.0|setFloat:variable.max_lifetime:1000.0|setFloat:variable.size_y:1|setFloat:variable.size_x:0.5`{lang=mccmd}\
`/scriptevent andexdb:createParticle minecraft:note_particle|~0.5~1~0.5|overworld|setColorRGBA:note_color:1:0.5:1:1 /scriptevent andexdb:createParticle minecraft:note_particle|~0.5~1~0.5|overworld|setColorRGBA:note_color:1:1:1:1`{lang=mccmd}

All of these examples could also be written as:

`/scriptevent andexdb:createParticle minecraft:block_destruct|~~2~2|overworld|setColorRGBA:color:0.5:0.25:0:1|setFloat:variable.EmitterTextureCoord.u:32|setFloat:variable.EmitterTextureCoord.v:32|setFloat:variable.EmitterTextureSize.u:32|setFloat:variable.EmitterTextureSize.v:32|setFloat:emitter_radius:0.2|setFloat:emitter_intensity:10`{lang=mccmd}\
`/scriptevent andexdb:createParticle andexdb:custom_block_texture_billboard|~0.5~1.5~0.5|overworld|rgba:color:1:1:1:1|f:variable.uv_u:0|f:variable.uv_v:0|f:variable.uv_size_u:5000|f:variable.uv_size_v:5000|f:variable.direction_x:0.0|f:variable.direction_y:0.0|f:variable.direction_z:1.0|f:variable.max_lifetime:1000.0|f:variable.size_y:0.5|f:variable.size_x:1`{lang=mccmd}\
`/scriptevent andexdb:createParticle andexdb:custom_item_texture_billboard|~0.5~1.5~0.5|overworld|rgba:color:1:1:1:1|f:variable.uv_u:0|f:variable.uv_v:0|f:variable.uv_size_u:1000|f:variable.uv_size_v:1000|f:variable.direction_x:0.0|f:variable.direction_y:0.0|f:variable.direction_z:1.0|f:variable.max_lifetime:1000.0|f:variable.size_y:1|f:variable.size_x:0.5`{lang=mccmd}\
`/scriptevent andexdb:createParticle minecraft:note_particle|~0.5~1~0.5|overworld|rgba:note_color:1:0.5:1:1 /scriptevent andexdb:createParticle minecraft:note_particle|~0.5~1~0.5|overworld|rgba:note_color:1:1:1:1`{lang=mccmd}

<!-- <template-Update details="a" />
<template-EmptySection />
<template-ExpandSection />
<template-IncompleteSection />
<template-MissingInformation />
<template-Stub />
<template-TooTechnical />
<template-WorkInProgress section="section" />
<msgbox mini />
<template-Shelved /> -->
