---
title: andexdbcmd Language Test
page_title: andexdbcmd Language Test
description: A test for the andexdbcmd language syntax highlighting.
hidden: true
---

```acmd
... rgba frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]> <alpha: float[min=0.0,max=1.0]>
... rgba dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]> <alpha: int[min=0,max=255]>
... rgba decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]> <alpha: float[min=0.0,max=255.0]>
... rgb hex <hexRGBAColor: RRGGBB|RGB>
... rgb frac <red: float[min=0.0,max=1.0]> <green: float[min=0.0,max=1.0]> <blue: float[min=0.0,max=1.0]>
... rgb dec <red: int[min=0,max=255]> <green: int[min=0,max=255]> <blue: int[min=0,max=255]>
... rgb decr <red: float[min=0.0,max=255.0]> <green: float[min=0.0,max=255.0]> <blue: float[min=0.0,max=255.0]>
... hsl <hue: float[min=0.0,max=360.0]> <saturation: float[min=0.0,max=100.0]> <lightness: float[min=0.0,max=100.0]>
\createexplosion <location: x y z> [dimension: string] [radius: float] [allowUnderwater: bool] [breaksBlocks: bool] [causesFire: bool] [source: target]
\\itfill <tileName: Block> <blockStates: block states> <ifillMode: replace|fill|cube|keep|walls|hollow|outline|pillars§c|floor|ceilling|diamond|hourglass§r> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <tileName: Block> <blockStates: block states> <ifillMode: replace|fill|cube|keep|walls|hollow|outline|pillars§c|floor|ceilling|diamond|hourglass§r> <reaplceTileName: Block> [clearContainers: boolean]

\\itfill <tileName: Block> <blockStates: block states> [ifillMode: replace|fill|cube|keep|walls|hollow|outline|pillars§c|floor|ceilling|diamond|hourglass§r] [clearContainers: boolean]

\\itfill <tileName: Block> <blockStates: block states> [clearContainers: boolean]

\\itfill <tileName: Block> <ifillMode: replace|fill|cube|keep|walls|hollow|outline|pillars§c|floor|ceilling|diamond|hourglass§r> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <tileName: Block> <ifillMode: replace|fill|cube|keep|walls|hollow|outline|pillars§c|floor|ceilling|diamond|hourglass§r> <reaplceTileName: Block> [clearContainers: boolean]

\\itfill <tileName: Block> [ifillMode: replace|fill|cube|keep|walls|hollow|outline|pillars§c|floor|ceilling|diamond|hourglass§r] [clearContainers: boolean]

\\itfill <tileName: Block> [clearContainers: boolean]

\\itfill <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> <reaplceTileName: Block> [clearContainers: boolean]

\\itfill <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> [clearContainers: boolean]

\\itfill <skygridSize: float> <tileName: Block> <blockStates: block states> <mode: {skygrid}|{inverseskygrid}> [clearContainers: boolean]

\\itfill <skygridSize: float> <tileName: Block> <mode: {skygrid}|{inverseskygrid}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <skygridSize: float> <tileName: Block> <mode: {skygrid}|{inverseskygrid}> <reaplceTileName: Block> [clearContainers: boolean]

\\itfill <skygridSize: float> <tileName: Block> <mode: {skygrid}|{inverseskygrid}> [clearContainers: boolean]

\\itfill <tileName: Block> [clearContainers: boolean]

\\itfill clear [clearContainers: boolean]

\\itfill drain

\\itfill <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> circle [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> circle [replaceTileName: Block] [clearContainers: boolean]

\\itfill <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> circle [clearContainers: boolean]

\\itfill <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> circle [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> circle [replaceTileName: Block] [clearContainers: boolean]

\\itfill <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> circle [clearContainers: boolean]

\\itfill <tileName: Block> <blockStates: block states> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <tileName: Block> <blockStates: block states> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [clearContainers: boolean]

\\itfill <tileName: Block> <blockStates: block states> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> [clearContainers: boolean]

\\itfill <tileName: Block> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <tileName: Block> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> <replaceTileName: Block> [clearContainers: boolean]

\\itfill <tileName: Block> <mode: {circlex}|{circley}|{circlez}|{circlexy}|{circleyz}|{circlexyz}|{sphere}|{semisphere}> [clearContainers: boolean]

\\itfill <thickness: float> <tileName: Block> <blockStates: block states> <mode: hollowsphere|dome> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <thickness: float> <tileName: Block> <blockStates: block states> <mode: hollowsphere|dome> <replaceTileName: Block> [clearContainers: boolean]

\\itfill <thickness: float> <tileName: Block> <blockStates: block states> <mode: hollowsphere|dome> [clearContainers: boolean]

\\itfill <thickness: float> <tileName: Block> <mode: hollowsphere|dome> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <thickness: float> <tileName: Block> <mode: hollowsphere|dome> <replaceTileName: Block> [clearContainers: boolean]

\\itfill <thickness: float> <tileName: Block> <mode: hollowsphere|dome> [clearContainers: boolean]

\\itfill <length: float> <tileName: Block> <blockStates: block states> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <length: float> <tileName: Block> <blockStates: block states> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [clearContainers: boolean]

\\itfill <length: float> <tileName: Block> <blockStates: block states> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> [clearContainers: boolean]

\\itfill <length: float> <tileName: Block> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <length: float> <tileName: Block> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> <replaceTileName: Block> [clearContainers: boolean]

\\itfill <length: float> <tileName: Block> <mode: cylinderx|cylindery|cylinderz|cylinderxy|cylinderyz|cylinderxz|cylinderxyz> [clearContainers: boolean]

\\itfill <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> <mode: tunnel|cylinder> [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> <mode: tunnel|cylinder> [replaceTileName: Block] [clearContainers: boolean]

\\itfill <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <blockStates: block states> <mode: tunnel|cylinder> [clearContainers: boolean]

\\itfill <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <mode: tunnel|cylinder> [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <mode: tunnel|cylinder> [replaceTileName: Block] [clearContainers: boolean]

\\itfill <length: float> <axis: {x}|{y}|{z}|{xy}|{yz}|{xz}|{xyz}> <tileName: Block> <mode: tunnel|cylinder> [clearContainers: boolean]

\\itfill <offset: x y z> <thickness: float> <tileName: Block> <blockStates: block states> hollowovoid [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <offset: x y z> <thickness: float> <tileName: Block> <blockStates: block states> hollowovoid [replaceTileName: Block] [clearContainers: boolean]

\\itfill <offset: x y z> <thickness: float> <tileName: Block> <blockStates: block states> hollowovoid [clearContainers: boolean]

\\itfill <offset: x y z> <thickness: float> <tileName: Block> hollowovoid [replaceTileName: Block] [replaceBlockStates: block states] [clearContainers: boolean]

\\itfill <offset: x y z> <thickness: float> <tileName: Block> hollowovoid [replaceTileName: Block] [clearContainers: boolean]

\\itfill <offset: x y z> <thickness: float> <tileName: Block> hollowovoid [clearContainers: boolean]
\examplecommand [-tfsa] <player: target[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]]> [name: string[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=true,precision=20]]]
\examplecommand <player: target> [name: string] [escapeCodesEnabled: boolean]
\examplecommand <player: target> <name: string> <escapeCodesEnabled: boolean>
\examplecommand <player: target> <name: string>
\examplecommand <player: target> <escapeCodesEnabled: boolean>
\examplecommand <player: target>
[-tfsa]
<name: string>
[size: number[?=1,??=1,min=-1000,max=1000,allowNaN=false,allowNegatives=false,precision=20]]
{player: target[?=@s,maxTargets=1]}
[-tfsa]
```
