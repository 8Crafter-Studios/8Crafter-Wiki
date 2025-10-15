import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const commands = [
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\backuparea",
    escregexp: {
      v: "^\\\\backuparea$",
    },
    formats: [
      {
        format: "\\\\backuparea",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\backuparea",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\ceil",
    escregexp: {
      v: "^\\\\ceil$",
    },
    formats: [
      {
        format: "\\ceil",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\ceil",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\chunk",
    escregexp: {
      v: "^\\\\chunk$",
    },
    formats: [
      {
        format: "\\\\chunk",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\chunk",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "\\\\cone",
    escregexp: {
      v: "^\\\\cone$",
    },
    formats: [
      {
        format: "\\cone",
      },
    ],
    command_version: "1.0.0-beta.59",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\cone",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\copy",
    escregexp: {
      v: "^\\\\copy$",
    },
    formats: [
      {
        format: "\\copy",
      },
    ],
    command_version: "3.0.2",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\copy",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\cube",
    escregexp: {
      v: "^\\\\cube$",
    },
    formats: [
      {
        format: "\\cube",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\cube",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\cut",
    escregexp: {
      v: "^\\\\cut$",
    },
    formats: [
      {
        format: "\\cut",
      },
    ],
    command_version: "3.0.2",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\cut",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: -1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\cyl",
    escregexp: {
      v: "^\\\\cyl$",
    },
    formats: [
      {
        format: "\\cyl",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\cyl",
    functional: true,
    deprecated: false,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\deletesavedpos",
    escregexp: {
      v: "^\\\\deletesavedpos$",
    },
    formats: [
      {
        format: "\\\\deletesavedpos <selectionID: string>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\deletesavedpos",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: -1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\drain",
    escregexp: {
      v: "^\\\\drain$",
    },
    formats: [
      {
        format: "\\drain [mask: Mask]",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\drain",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\expandselection",
    escregexp: {
      v: "^\\\\expandselection$",
    },
    aliases: [
      {
        commandName: "\\\\exsel",
        escregexp: {
          v: "^\\\\exsel$",
        },
      },
      {
        commandName: "\\\\es",
        escregexp: {
          v: "^\\\\es$",
        },
      },
    ],
    formats: [
      {
        format: "\\expandselection",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["worldedit"],
    commandSettingsId: "built-inCommandSettings:\\expandselection",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: -1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\flood",
    escregexp: {
      v: "^\\\\flood$",
    },
    formats: [
      {
        format: "\\flood [mask: Mask]",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\flood",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\floor",
    escregexp: {
      v: "^\\\\floor$",
    },
    formats: [
      {
        format: "\\floor",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\floor",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\generate",
    escregexp: {
      v: "^\\\\generate$",
    },
    formats: [
      {
        format: "\\generate",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\generate",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\generatecallback",
    escregexp: {
      v: "^\\\\generatecallback$",
    },
    formats: [
      {
        format: "\\generatecallback",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\generatecallback",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\generatef",
    escregexp: {
      v: "^\\\\generatef$",
    },
    formats: [
      {
        format: "\\generatef",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\generatef",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\generatejs",
    escregexp: {
      v: "^\\\\generatejs$",
    },
    formats: [
      {
        format: "\\generatejs",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\generatejs",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\generates",
    escregexp: {
      v: "^\\\\generates$",
    },
    formats: [
      {
        format: "\\generates",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\generates",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\generateterrain",
    escregexp: {
      v: "^\\\\generateterrain$",
    },
    formats: [
      {
        format: "\\generateterrain",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\generateterrain",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\hcone",
    escregexp: {
      v: "^\\\\hcone$",
    },
    formats: [
      {
        format: "\\hcone",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\hcone",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\hcube",
    escregexp: {
      v: "^\\\\hcube$",
    },
    formats: [
      {
        format: "\\hcube",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\hcube",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\hcyl",
    escregexp: {
      v: "^\\\\hcyl$",
    },
    formats: [
      {
        format: "\\hcyl",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\hcyl",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\hpos1",
    escregexp: {
      v: "^\\\\hpos1$",
    },
    formats: [
      {
        format: "\\\\hpos1",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\hpos1",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: -1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\hpos2",
    escregexp: {
      v: "^\\\\hpos2$",
    },
    formats: [
      {
        format: "\\\\hpos2",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\hpos2",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: -1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\hreplace",
    escregexp: {
      v: "^\\\\hreplace$",
    },
    formats: [
      {
        format: "\\hreplace",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\hreplace",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\hsphere",
    escregexp: {
      v: "^\\\\hsphere$",
    },
    formats: [
      {
        format: "\\hsphere",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\hsphere",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\idtfill",
    escregexp: {
      v: "^\\\\idtfill$",
    },
    formats: [
      {
        format: "\\\\idtfill",
      },
    ],
    command_version: "1.0.2-rc.5",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\idtfill",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 0,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\itfill",
    escregexp: {
      v: "^\\\\itfill$",
    },
    formats: [
      {
        format: "\\\\itfill",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\itfill",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 0,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\listpos",
    escregexp: {
      v: "^\\\\listpos$",
    },
    formats: [
      {
        format: "\\\\listpos",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\listpos",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 0,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\loadchunks",
    escregexp: {
      v: "^\\\\loadchunks$",
    },
    aliases: [
      {
        commandName: "\\\\lc",
        escregexp: {
          v: "^\\\\lc$",
        },
      },
    ],
    formats: [
      {
        format: "\\loadchunks",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\loadchunks",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\loadpos",
    escregexp: {
      v: "^\\\\loadpos$",
    },
    formats: [
      {
        format: "\\\\loadpos <selectionID: string>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\loadpos",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\maze",
    escregexp: {
      v: "^\\\\maze$",
    },
    formats: [
      {
        format:
          "\\maze [wallBlockType: Block[?=minecraft:stone]] [airBlockType: Block[?=minecraft:air]] [entranceDirection: ({North}|{South}|{East}|{West})[?=North]] [exitDirection: ({North}|{South}|{East}|{West})[?=South]] [complexity: int[?=0]]",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\maze",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\move",
    escregexp: {
      v: "^\\\\move$",
    },
    formats: [
      {
        format: "\\\\move",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\move",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\offset",
    escregexp: {
      v: "^\\\\offset$",
    },
    formats: [
      {
        format: "\\\\offset",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\offset",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\omove",
    escregexp: {
      v: "^\\\\omove$",
    },
    formats: [
      {
        format: "\\\\omove",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\omove",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\oreplace",
    escregexp: {
      v: "^\\\\oreplace$",
    },
    formats: [
      {
        format: "\\oreplace",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\oreplace",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\overlay",
    escregexp: {
      v: "^\\\\overlay$",
    },
    formats: [
      {
        format: "\\\\overlay",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\overlay",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\paste",
    escregexp: {
      v: "^\\\\paste$",
    },
    formats: [
      {
        format: "\\paste",
      },
    ],
    command_version: "3.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\paste",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\pos1",
    escregexp: {
      v: "^\\\\pos1$",
    },
    formats: [
      {
        format: "\\\\pos1",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\pos1",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\pos2",
    escregexp: {
      v: "^\\\\pos2$",
    },
    formats: [
      {
        format: "\\\\pos2",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\pos2",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\protectarea",
    escregexp: {
      v: "^\\\\protectarea$",
    },
    formats: [
      {
        format: "\\\\protectarea",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\protectarea",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\regenerateblocks",
    escregexp: {
      v: "^\\\\regenerateblocks$",
    },
    formats: [
      {
        format: "\\\\regenerateblocks",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\regenerateblocks",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\remove",
    escregexp: {
      v: "^\\\\remove$",
    },
    formats: [
      {
        format: "\\remove",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\remove",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\replace",
    escregexp: {
      v: "^\\\\replace$",
    },
    formats: [
      {
        format: "\\replace",
      },
    ],
    command_version: "3.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\replace",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\savepos",
    escregexp: {
      v: "^\\\\savepos$",
    },
    formats: [
      {
        format: "\\\\savepos <selectionID: string>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\savepos",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: -1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\savestructure",
    escregexp: {
      v: "^\\\\savestructure$",
    },
    formats: [
      {
        format: "\\savestructure",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\savestructure",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: -1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\selectmode",
    escregexp: {
      v: "^\\\\selectmode$",
    },
    formats: [
      {
        format: "\\\\selectmode [default|noliquid|nopassable|noliquidnopassable]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\selectmode",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 0,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\set",
    escregexp: {
      v: "^\\\\set$",
    },
    formats: [
      {
        format: "\\set",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\set",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\seti",
    escregexp: {
      v: "^\\\\seti$",
    },
    formats: [
      {
        format: "\\seti",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\seti",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\shift",
    escregexp: {
      v: "^\\\\shift$",
    },
    formats: [
      {
        format: "\\\\shift",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\shift",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "\\\\smove",
    escregexp: {
      v: "^\\\\smove$",
    },
    formats: [
      {
        format: "\\\\smove",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\smove",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\sphere",
    escregexp: {
      v: "^\\\\sphere$",
    },
    formats: [
      {
        format: "\\sphere",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\sphere",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\stack",
    escregexp: {
      v: "^\\\\stack$",
    },
    formats: [
      {
        format: "\\stack",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\stack",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\stsphere",
    escregexp: {
      v: "^\\\\stsphere$",
    },
    formats: [
      {
        format: "\\stsphere",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\stsphere",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\tube",
    escregexp: {
      v: "^\\\\tube$",
    },
    formats: [
      {
        format: "\\tube",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\tube",
    functional: true,
    deprecated: false,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\undo",
    escregexp: {
      v: "^\\\\undo$",
    },
    formats: [
      {
        format: "\\undo",
      },
    ],
    command_version: "3.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\undo",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 0,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "\\\\walls",
    escregexp: {
      v: "^\\\\walls$",
    },
    formats: [
      {
        format: "\\walls",
      },
    ],
    command_version: "3.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:\\walls",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    undoSupported: 1,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "align",
    escregexp: {
      v: "^align$",
    },
    formats: [
      {
        format: "align",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "players"],
    commandSettingsId: "built-inCommandSettings:align",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "aligncenter",
    escregexp: {
      v: "^aligncenter$",
    },
    formats: [
      {
        format: "aligncenter",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "players"],
    commandSettingsId: "built-inCommandSettings:aligncenter",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "attribute",
    escregexp: {
      v: "^attribute$",
    },
    formats: [
      {
        format: 'Too many to list here. Run the command "\\help cmd attribute" instead. ',
      },
    ],
    command_version: "0.17.9-alpha.33",
    category: ["world"],
    description: "",
    commandSettingsId: "built-inCommandSettings:attribute",
    functional: false,
    deprecated: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "binvsee",
    escregexp: {
      v: "^binvsee$",
    },
    formats: [
      {
        format: "binvsee <dimension: dimensionId|~> <blockLocation: x y z>",
      },
    ],
    command_version: "4.1.0",
    description: "Invsees into a block. ",
    category: ["invsee"],
    commandSettingsId: "built-inCommandSettings:binvsee",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "block",
    escregexp: {
      v: "^block$",
    },
    formats: [
      {
        format: "block ...",
      },
    ],
    command_version: "0.2.7-alpha.36",
    description: "Manages blocks.",
    category: ["world", "blocks"],
    commandSettingsId: "built-inCommandSettings:block",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "bluemodsversion",
    escregexp: {
      v: "^bluemodsversion$",
    },
    aliases: [
      {
        commandName: "bmver",
        escregexp: {
          v: "^bmver$",
        },
      },
    ],
    formats: [
      {
        format: "bluemodsversion",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server"],
    commandSettingsId: "built-inCommandSettings:bluemodsversion",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "brush",
    escregexp: {
      v: "^brush$",
    },
    aliases: [
      {
        commandName: "br",
        escregexp: {
          v: "^br$",
        },
      },
      {
        commandName: "\\\\brush",
        escregexp: {
          v: "^\\\\brush$",
        },
      },
      {
        commandName: "\\\\br",
        escregexp: {
          v: "^\\\\br$",
        },
      },
    ],
    formats: [
      {
        format: "brush",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:brush",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "butcher",
    escregexp: {
      v: "^butcher$",
    },
    aliases: [
      {
        commandName: "but",
        escregexp: {
          v: "^but$",
        },
      },
    ],
    formats: [
      {
        format: "butcher",
      },
    ],
    command_version: "2.7.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:butcher",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "butcherdespawn",
    escregexp: {
      v: "^butcherdespawn$",
    },
    aliases: [
      {
        commandName: "butdes",
        escregexp: {
          v: "^butdes$",
        },
      },
    ],
    formats: [
      {
        format: "butcherdespawn",
      },
    ],
    command_version: "2.7.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:butcherdespawn",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "clearchat",
    escregexp: {
      v: "^clearchat$",
    },
    aliases: [
      {
        commandName: "cc",
        escregexp: {
          v: "^cc$",
        },
      },
    ],
    formats: [
      {
        format: "clearchat",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:clearchat",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "chatcommandui",
    escregexp: {
      v: "^chatcommandui$",
    },
    aliases: [
      {
        commandName: "chtcmdui",
        escregexp: {
          v: "^chtcmdui$",
        },
      },
      {
        commandName: "cmdui",
        escregexp: {
          v: "^cmdui$",
        },
      },
      {
        commandName: "commandui",
        escregexp: {
          v: "^commandui$",
        },
      },
    ],
    formats: [
      {
        format: "chatcommandui",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:chatcommandui",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "chatsendui",
    escregexp: {
      v: "^chatsendui$",
    },
    aliases: [
      {
        commandName: "chtsndui",
        escregexp: {
          v: "^chtsndui$",
        },
      },
      {
        commandName: "chtsendui",
        escregexp: {
          v: "^chtsendui$",
        },
      },
      {
        commandName: "sendui",
        escregexp: {
          v: "^sendui$",
        },
      },
    ],
    formats: [
      {
        format: "chatsendui",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:chatsendui",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands", "canUseDangerousCommands"],
    formatting_code: "§r§4",
    commandName: "chunkban",
    escregexp: {
      v: "^chunkban$",
    },
    formats: [
      {
        format: "chunkban [slot: int|~] [loopCount: int] [target: string|~]",
      },
    ],
    command_version: "1.2.7-beta.83",
    description: "",
    category: ["dangerous"],
    commandSettingsId: "built-inCommandSettings:chunkban",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "chunkinfo",
    escregexp: {
      v: "^chunkinfo$",
    },
    formats: [
      {
        format: "chunkinfo",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:chunkinfo",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "clear",
    escregexp: {
      v: "^clear$",
    },
    formats: [
      {
        format: "clear <target: string> [itemType: Item]",
      },
    ],
    command_version: "0.0.1-indev.35",
    category: ["players"],
    description: "",
    commandSettingsId: "built-inCommandSettings:clear",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "clearenderchest",
    escregexp: {
      v: "^clearenderchest$",
    },
    formats: [
      {
        format:
          "clearenderchest [stackCount: int|fill|replaceall|replacefill] [stackSize: int|max|~] [target: string|~]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:clearenderchest",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "clearenderchestslot",
    escregexp: {
      v: "^clearenderchestslot$",
    },
    formats: [
      {
        format:
          "clearenderchestslot [stackCount: int|fill|replaceall|replacefill] [stackSize: int|max|~] [target: string|~]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:clearenderchestslot",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "cloneitem",
    escregexp: {
      v: "^cloneitem$",
    },
    formats: [
      {
        format: "cloneitem <toPlayer: playerName>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:cloneitem",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "closeuis",
    escregexp: {
      v: "^closeuis$",
    },
    aliases: [
      {
        commandName: "closeui",
        escregexp: {
          v: "^closeui$",
        },
      },
    ],
    formats: [
      {
        format: "closeuis [targets: target[?=@a,allowMultiple=true,playersOnly=true]]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:closeuis",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "compressitems",
    escregexp: {
      v: "^compressitems$",
    },
    formats: [
      {
        format: "compressitems [mode: inventory|hotbar|armor|equipment|all] [target: string|~]",
      },
    ],
    command_version: "1.0.0-rc.5",
    description: "Compresses your items into chest(s) and gives you those chest(s) as items. ",
    category: ["players", "containers/inventories", "items"],
    commandSettingsId: "built-inCommandSettings:compressitems",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "compressitemscontainer",
    escregexp: {
      v: "^compressitemscontainer$",
    },
    formats: [
      {
        format:
          "compressitemscontainer [containerType: Block] [mode: inventory|hotbar|armor|equipment|all] [target: string|~]",
      },
    ],
    command_version: "1.0.0",
    description:
      "Compresses your items into container(s) and gives you those container(s) as items. ",
    category: ["players", "containers/inventories", "items"],
    commandSettingsId: "built-inCommandSettings:compressitemscontainer",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "compressitemscontainerb",
    escregexp: {
      v: "^compressitemscontainerb$",
    },
    formats: [
      {
        format:
          "compressitemscontainerb [containerType: Block] [mode: inventory|hotbar|armor|equipment|all] [target: string|~]",
      },
    ],
    command_version: "0.0.1-alpha.76",
    description:
      "Compresses your items into container(s) and gives you those container(s) as items. ",
    category: ["players", "containers/inventories", "items"],
    commandSettingsId: "built-inCommandSettings:compressitemscontainerb",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "compressitemsshulker",
    escregexp: {
      v: "^compressitemsshulker$",
    },
    formats: [
      {
        format:
          "compressitemsshulker [mode: inventory|hotbar|armor|equipment|all] [target: string|~]",
      },
    ],
    command_version: "1.0.0",
    description:
      "Compresses your items into shulker box(es) and gives you those shulker box(es) as items. ",
    category: ["players", "containers/inventories", "items"],
    commandSettingsId: "built-inCommandSettings:compressitemsshulker",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "copyitem",
    escregexp: {
      v: "^copyitem$",
    },
    formats: [
      {
        format:
          'copyitem <slot: int|"head"|"chest"|"legs"|"feet"|"mainhand"|"offhand"> <toPlayer: (playerName|~)[?=~]>',
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:copyitem",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "copyitemfrom",
    escregexp: {
      v: "^copyitemfrom$",
    },
    formats: [
      {
        format:
          "copyitemfrom <fromSlot: int|{head}|{chest}|{legs}|{feet}|{mainhand}|{offhand}> [toSlot: (int|{head}|{chest}|{legs}|{feet}|{mainhand}|{offhand})[?=~]] [fromPlayer: (playerName|~)[?=~]] [toPlayer: (playerName|~)[?=~]]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:copyitemfrom",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "createexplosion",
    escregexp: {
      v: "^createexplosion$",
    },
    formats: [
      {
        format:
          "createexplosion <location: x y z> <dimension: string> [radius: float] [allowUnderwater: bool] [breaksBlocks: bool] [causesFire: bool] [source: targetSelector]",
      },
    ],
    command_version: "1.0.0-rc.57",
    description: "Creates an explosion. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:createexplosion",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "data",
    escregexp: {
      v: "^data$",
    },
    formats: [
      {
        format: 'Too many to list here. Run the command "\\help cmd data" instead. ',
      },
    ],
    command_version: "0.56.76-alpha.12",
    category: ["world"],
    description: "",
    commandSettingsId: "built-inCommandSettings:data",
    functional: false,
    deprecated: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "datapickblock",
    escregexp: {
      v: "^datapickblock$",
    },
    aliases: [
      {
        commandName: "dpb",
        escregexp: {
          v: "^dpb$",
        },
      },
    ],
    formats: [
      {
        format: "datapickblock",
      },
    ],
    command_version: "1.0.0",
    category: ["world"],
    description: "",
    commandSettingsId: "built-inCommandSettings:datapickblock",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "debugstickdyingmode",
    escregexp: {
      v: "^debugstickdyingmode$",
    },
    aliases: [
      {
        commandName: "debugsticksdyingmode",
        escregexp: {
          v: "^debugsticksdyingmode$",
        },
      },
      {
        commandName: "dsdm",
        escregexp: {
          v: "^dsdm$",
        },
      },
    ],
    formats: [
      {
        format: "debugstickdyingmode [enabled: bool[?=toggle]]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "items"],
    commandSettingsId: "built-inCommandSettings:debugstickdyingmode",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "defaulthealth",
    escregexp: {
      v: "^defaulthealth$",
    },
    aliases: [
      {
        commandName: "dfthlth",
        escregexp: {
          v: "^dfthlth$",
        },
      },
      {
        commandName: "dflthlth",
        escregexp: {
          v: "^dflthlth$",
        },
      },
      {
        commandName: "dfthealth",
        escregexp: {
          v: "^dfthealth$",
        },
      },
      {
        commandName: "dflthealth",
        escregexp: {
          v: "^dfthealth$",
        },
      },
    ],
    formats: [
      {
        format: "defaulthealth [target: target[?=@s,allowMultiple=true]]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "entities"],
    commandSettingsId: "built-inCommandSettings:defaulthealth",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§6",
    commandName: "disconnect",
    escregexp: {
      v: "^disconnect$",
    },
    aliases: [
      {
        commandName: "boot",
        escregexp: {
          v: "^boot$",
        },
      },
    ],
    formats: [
      {
        format: "disconnect [players: target[?=@s,allowMultiple=true,onlyPlayers=true]]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["Entity Scale Add-On", "system", "world", "players", "server"],
    commandSettingsId: "built-inCommandSettings:disconnect",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "drain",
    escregexp: {
      v: "^drain$",
    },
    formats: [
      {
        format: "drain [radius: number]",
      },
    ],
    command_version: "3.0.0",
    description:
      "Drains liquids in the specified radius, the radius defaults to 10 if not specified. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:drain",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "dupeitem",
    escregexp: {
      v: "^dupeitem$",
    },
    formats: [
      {
        format: "dupeitem",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:dupeitem",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "editorstick",
    escregexp: {
      v: "^editorstick$",
    },
    formats: [
      {
        format: "editorstick",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:editorstick",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "editorstickb",
    escregexp: {
      v: "^editorstickb$",
    },
    formats: [
      {
        format: "editorstickb",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:editorstickb",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "editorstickc",
    escregexp: {
      v: "^editorstickc$",
    },
    formats: [
      {
        format: "editorstickc",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:editorstickc",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "einvsee",
    escregexp: {
      v: "^einvsee$",
    },
    formats: [
      {
        format: "einvsee <targetSelector: target>",
      },
    ],
    command_version: "1.6.0",
    description: "Invsees into and entity's inventory and equipment slots. ",
    category: ["invsee"],
    commandSettingsId: "built-inCommandSettings:einvsee",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "einvseeb",
    escregexp: {
      v: "^einvseeb$",
    },
    formats: [
      {
        format: "einvseeb <targetSelector: target>",
      },
    ],
    command_version: "1.6.0",
    description:
      "The original version of the \\einvsee command that does not scan equipment slots. ",
    category: ["invsee"],
    commandSettingsId: "built-inCommandSettings:einvseeb",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "enchantmentbarrels",
    escregexp: {
      v: "^enchantmentbarrels$",
    },
    aliases: [
      {
        commandName: "eb",
        escregexp: {
          v: "^eb$",
        },
      },
    ],
    formats: [
      {
        format: "enchantmentbarrels [level: number[?=0]]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items", "blocks", "world"],
    commandSettingsId: "built-inCommandSettings:enchantmentbarrels",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "enderchest",
    escregexp: {
      v: "^enderchest$",
    },
    aliases: [
      {
        commandName: "ec",
        escregexp: {
          v: "^ec$",
        },
      },
    ],
    formats: [
      {
        format: "enderchest",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:enderchest",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "entityscaleversion",
    escregexp: {
      v: "^entityscaleversion$",
    },
    aliases: [
      {
        commandName: "esver",
        escregexp: {
          v: "^esver$",
        },
      },
    ],
    formats: [
      {
        format: "entityscaleversion",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server"],
    commandSettingsId: "built-inCommandSettings:entityscaleversion",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "eval",
    escregexp: {
      v: "^eval$",
    },
    formats: [
      {
        format: "eval <script: JavaScript>",
      },
    ],
    command_version: "1.1.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:eval",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "execute",
    escregexp: {
      v: "^execute$",
    },
    formats: [
      {
        format: "execute",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["system"],
    commandSettingsId: "built-inCommandSettings:execute",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "extinguish",
    escregexp: {
      v: "^extinguish$",
    },
    aliases: [
      {
        commandName: "ext",
        escregexp: {
          v: "^ext$",
        },
      },
      {
        commandName: "ex",
        escregexp: {
          v: "^ex$",
        },
      },
      {
        commandName: "remfire",
        escregexp: {
          v: "^remfire$",
        },
      },
    ],
    formats: [
      {
        format: "extinguish [radius: number]",
      },
    ],
    command_version: "2.2.0",
    description:
      "Extinguishes fire in the specified radius, the radius default to 10 if not specified. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:extinguish",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "extrafeaturessettings",
    escregexp: {
      v: "^extrafeaturessettings$",
    },
    aliases: [
      {
        commandName: "extrasettings",
        escregexp: {
          v: "^extrasettings$",
        },
      },
    ],
    formats: [
      {
        format: "extrafeaturessettings",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:extrafeaturessettings",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "fill",
    escregexp: {
      v: "^fill$",
    },
    formats: [
      {
        format:
          "fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "fill <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "1.1.0",
    description:
      "Better version fo the vanilla /fill command that can fill secret blocks types that normally require an nbt editor to obtain. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:fill",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "fillillegal",
    escregexp: {
      v: "^fillillegal$",
    },
    aliases: [
      {
        commandName: "invfillillegal",
        escregexp: {
          v: "^invfillillegal$",
        },
      },
    ],
    formats: [
      {
        format:
          "fillillegal [stackCount: int|fill|replaceall|replacefill] [stackSize: int|max|~] [target: string|~]",
      },
    ],
    command_version: "0.9.0-alpha.37",
    description: "",
    category: ["items", "players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:fillillegal",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "fillinventory",
    escregexp: {
      v: "^fillinventory$",
    },
    aliases: [
      {
        commandName: "invfill",
        escregexp: {
          v: "^invfill$",
        },
      },
    ],
    formats: [
      {
        format:
          "fillinventory <itemJSON: itemJSON> [stackCount: int|fill|replaceall|replacefill] [target: string|~]",
      },
    ],
    command_version: "1.0.0-beta.17",
    description: "",
    category: ["items", "players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:fillinventory",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "filljunk",
    escregexp: {
      v: "^filljunk$",
    },
    aliases: [
      {
        commandName: "invfilljunk",
        escregexp: {
          v: "^invfilljunk$",
        },
      },
    ],
    formats: [
      {
        format:
          "filljunk [stackCount: int|fill|replaceall|replacefill] [stackSize: int|max|~] [target: string|~]",
      },
    ],
    command_version: "0.9.0-alpha.37",
    description: "",
    category: ["items", "players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:filljunk",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "fillop",
    escregexp: {
      v: "^fillop$",
    },
    aliases: [
      {
        commandName: "invfillop",
        escregexp: {
          v: "^invfillop$",
        },
      },
    ],
    formats: [
      {
        format:
          "fillop [stackCount: int|fill|replaceall|replacefill] [stackSize: int|max|~] [target: string|~]",
      },
    ],
    command_version: "0.9.0-alpha.37",
    description: "",
    category: ["items", "players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:fillop",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "fillrandom",
    escregexp: {
      v: "^fillrandom$",
    },
    aliases: [
      {
        commandName: "invfillrandom",
        escregexp: {
          v: "^invfillrandom$",
        },
      },
    ],
    formats: [
      {
        format:
          "fillrandom [stackCount: int|fill|replaceall|replacefill] [stackSize: int|max|~] [target: string|~]",
      },
    ],
    command_version: "1.0.0-rc.77",
    description: "",
    category: ["items", "players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:fillrandom",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "findtransformdvindex",
    escregexp: {
      v: "^findtransformdvindex$",
    },
    formats: [
      {
        format: "findtransformdvindex",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["server", "items"],
    commandSettingsId: "built-inCommandSettings:findtransformdvindex",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gettransformst",
    escregexp: {
      v: "^gettransformst$",
    },
    formats: [
      {
        format: "gettransformst",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["server", "items"],
    commandSettingsId: "built-inCommandSettings:gettransformst",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "getuuid",
    escregexp: {
      v: "^getuuid$",
    },
    formats: [
      {
        format: "getuuid <targets: target[allowMultiple=true]>",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["entities"],
    commandSettingsId: "built-inCommandSettings:getuuid",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "getworldspawnpoint",
    escregexp: {
      v: "^getworldspawnpoint$",
    },
    aliases: [
      {
        commandName: "getworldspawn",
        escregexp: {
          v: "^getworldspawn$",
        },
      },
      {
        commandName: "getwsp",
        escregexp: {
          v: "^getwsp$",
        },
      },
      {
        commandName: "getws",
        escregexp: {
          v: "^getws$",
        },
      },
      {
        commandName: "gwsp",
        escregexp: {
          v: "^gwsp$",
        },
      },
      {
        commandName: "gws",
        escregexp: {
          v: "^gws$",
        },
      },
    ],
    formats: [
      {
        format: "getworldspawnpoint",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:getworldspawnpoint",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "give",
    escregexp: {
      v: "^give$",
    },
    formats: [
      {
        format: "give <item: itemType> [amount: int[min=1,max=Infinity]]",
      },
    ],
    command_version: "2.0.0",
    description:
      "This command can give you items of any type, even ones that normally require an nbt editor to obtain. ",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:give",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "giveb",
    escregexp: {
      v: "^giveb$",
    },
    formats: [
      {
        format: "giveb <item: itemType> [amount: int[min=1,max=255]]",
      },
    ],
    command_version: "2.0.0",
    description:
      "This command can give you items of any type, even ones that normally require an nbt editor to obtain, with any stack size up to 255, in your next unoccupied inventory slot. ",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:giveb",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "givec",
    escregexp: {
      v: "^givec$",
    },
    formats: [
      {
        format: "givec <itemJSON: itemJSON>",
      },
    ],
    command_version: "2.0.0",
    description:
      "This command can give you items of any type with lots of properties already set on it through the item JSON, even ones that normally require an nbt editor to obtain, with any stack size up to 255, in your next unoccupied inventory slot. ",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:givec",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gma",
    escregexp: {
      v: "^gma$",
    },
    formats: [
      {
        format: "gma",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:gma",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gmc",
    escregexp: {
      v: "^gmc$",
    },
    formats: [
      {
        format: "gmc",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:gmc",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gmd",
    escregexp: {
      v: "^gmd$",
    },
    formats: [
      {
        format: "gmd",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:gmd",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gmg",
    escregexp: {
      v: "^gmg$",
    },
    formats: [
      {
        format: "gmg",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:gmg",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gmp",
    escregexp: {
      v: "^gmp$",
    },
    formats: [
      {
        format: "gmp",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:gmp",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gmr",
    escregexp: {
      v: "^gmr$",
    },
    formats: [
      {
        format: "gmr",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:gmr",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "gms",
    escregexp: {
      v: "^gms$",
    },
    formats: [
      {
        format: "gms",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:gms",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "gohome",
    escregexp: {
      v: "^gohome$",
    },
    formats: [
      {
        format: "gohome",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "warps"],
    commandSettingsId: "built-inCommandSettings:gohome",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "ground",
    escregexp: {
      v: "^ground$",
    },
    formats: [
      {
        format: "ground [-lp]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "warps"],
    commandSettingsId: "built-inCommandSettings:ground",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "h#",
    escregexp: {
      v: "^h(\\d*)$",
    },
    formats: [
      {
        format: "h<presetId: float> <containerRow: float>",
      },
    ],
    command_version: "1.0.0",
    description: "Swaps your hotbar with the specified hotbar preset. ",
    category: ["containers/inventories"],
    commandSettingsId: "built-inCommandSettings:h#",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "heal",
    escregexp: {
      v: "^heal$",
    },
    formats: [
      {
        format: "heal",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "entities"],
    commandSettingsId: "built-inCommandSettings:heal",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "health",
    escregexp: {
      v: "^health$",
    },
    formats: [
      {
        format: "health",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "entities"],
    commandSettingsId: "built-inCommandSettings:health",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "help",
    escregexp: {
      v: "^help$",
    },
    formats: [
      {
        format: "help",
      },
      {
        format: "help chatcommands",
        description: "lists the available chat commands and their main formats",
      },
      {
        format: "help javascriptfunctions",
        description: "lists all available javascript functions, constants, variables, and classes",
      },
      {
        format: "help jsfunction <jsObjectId: string>",
        description:
          "gets the source code of a specific javascript function, constant, variable, or class",
      },
    ],
    command_version: "33.5.2",
    category: ["misc"],
    description: "",
    commandSettingsId: "built-inCommandSettings:help",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "hlist",
    escregexp: {
      v: "^hlist$",
    },
    formats: [
      {
        format: "hlist",
      },
    ],
    command_version: "1.0.0",
    description: "Lists all of your currently saved hotbar presets.",
    category: ["containers/inventories"],
    commandSettingsId: "built-inCommandSettings:hlist",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "hcontents",
    escregexp: {
      v: "^hcontents$",
    },
    formats: [
      {
        format: "hcontents [presetId: int]",
      },
    ],
    command_version: "0.7.9-beta.76",
    description: "Lists the contents of all of your currently saved hotbar presets.",
    category: ["containers/inventories"],
    commandSettingsId: "built-inCommandSettings:hcontents",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "home",
    escregexp: {
      v: "^home$",
    },
    formats: [
      {
        format: "home",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "warps"],
    commandSettingsId: "built-inCommandSettings:home",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "hset",
    escregexp: {
      v: "^hset$",
    },
    formats: [
      {
        format: "hset <presetId: float> [dimensionId: string] [location: x y z]",
      },
    ],
    command_version: "1.0.0",
    description: "Sets the specified hotbar preset to the specified location. ",
    category: ["containers/inventories"],
    commandSettingsId: "built-inCommandSettings:hset",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "idtfill",
    escregexp: {
      v: "^idtfill$",
    },
    formats: ["Too many to list. Use the \\help command to see the syntax."],
    command_version: "30.0.1-beta.99",
    description:
      "Same as the \\itfill command except for the fact that it allows you to specify the integrity of the fill. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:idtfill",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "ifill",
    escregexp: {
      v: "^ifill$",
    },
    formats: [
      {
        format:
          "ifill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "ifill <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "32.0.1",
    description:
      "Better version of the vanilla /fill command that can fill secret blocks types that normally require an nbt editor to obtain, and has no fill size limits. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ifill",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "ifillb",
    escregexp: {
      v: "^ifillb$",
    },
    formats: [
      {
        format:
          "ifillb <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "ifillb <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "1.28.1",
    description:
      "Better version fo the vanilla /fill command that can fill secret blocks types that normally require an nbt editor to obtain, and has no fill size limits. Original version of the \\ifill command, only allows for matching exact block states but is much quicker. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ifillb",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "ifillc",
    escregexp: {
      v: "^ifillc$",
    },
    formats: [],
    command_version: "1.28.1",
    description:
      "Better version fo the vanilla /fill command that can fill secret blocks types that normally require an nbt editor to obtain, and has no fill size limits. Second version of the \\ifill command. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ifillc",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "ifilld",
    escregexp: {
      v: "^ifilld$",
    },
    formats: [],
    command_version: "1.28.1",
    description:
      "Better version fo the vanilla /fill command that can fill secret blocks types that normally require an nbt editor to obtain, and has no fill size limits. Third version of the \\ifill command. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ifilld",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "igfill",
    escregexp: {
      v: "^igfill$",
    },
    formats: [
      {
        format:
          "igfill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "igfill <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "4.100.1",
    description:
      "This is a version of the \\ifill command that uses a generator function so it does not cause as much lag, but it is VERY slow. Better version fo the vanilla /fill command that can fill secret blocks types that normally require an nbt editor to obtain, and has no fill size limits. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:igfill",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "ignite",
    escregexp: {
      v: "^ignite$",
    },
    formats: [
      {
        format: "ignite [radius: number]",
      },
    ],
    command_version: "2.3.0-beta.17",
    description:
      "Ignites air blocks in the specified radius, the radius defaults to 10 if not specified. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ignite",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "ihollow",
    escregexp: {
      v: "^ihollow$",
    },
    formats: [
      {
        format:
          "ihollow <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "ihollow <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "6.12.0",
    description:
      "Same as the \\ifill command except for the fact that it only fills the sides of the specified area. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ihollow",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "invsee",
    escregexp: {
      v: "^invsee$",
    },
    formats: [
      {
        format: "invsee <target: targetSelector>",
      },
    ],
    command_version: "1.6.0",
    description: "",
    category: ["invsee"],
    commandSettingsId: "built-inCommandSettings:invsee",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "invseep",
    escregexp: {
      v: "^invseep$",
    },
    formats: [
      {
        format: "invseep <target: targetSelector>",
      },
    ],
    command_version: "1.6.0",
    description: "",
    category: ["invsee"],
    commandSettingsId: "built-inCommandSettings:invseep",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "invseeuuidmode",
    escregexp: {
      v: "^invseeuuidmode$",
    },
    formats: [
      {
        format: "invseeuuidmode <entityUUID: UUID>",
      },
    ],
    command_version: "1.2.0",
    description: "Invsees into he entity matching the inputted UUID. ",
    category: ["invsee"],
    commandSettingsId: "built-inCommandSettings:invseeuuidmode",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "iogfill",
    escregexp: {
      v: "^iogfill$",
    },
    formats: [
      {
        format:
          "iogfill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "iogfill <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "4.19.1",
    description:
      "This is a version of the \\ifill command that uses a generator function so it does not cause as much lag, but it is VERY slow. Better version fo the vanilla /fill command that can fill secret blocks types that normally require an nbt editor to obtain, and has no fill size limits. Same as \\igfill except for the fact that it always resets any non-specified block states to the defaults instead of keeping them as what they were if possible. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:iogfill",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "ioutline",
    escregexp: {
      v: "^ioutline$",
    },
    formats: [
      {
        format:
          "ioutline <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "ioutline <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "6.12.0",
    description:
      "Same as the \\ifill command except for the fact that it only fills the outline of the specified area. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ioutline",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "ipillars",
    escregexp: {
      v: "^ipillars$",
    },
    formats: [
      {
        format:
          "ipillars <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "ipillars <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "6.12.0",
    description:
      "Same as the \\ifill command except for the fact that it only fills the pillars of the specified area. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ipillars",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "item",
    escregexp: {
      v: "^item$",
    },
    formats: [
      {
        format: "item lore <loreArray: escapableStringJSON>",
      },
      {
        format: "item lorene <loreArray: JSON>",
      },
      {
        format: "item name <name: escapableString>",
      },
      {
        format: "item json <itemJSON: itemJSON>",
      },
      {
        format: "item jsonb <itemJSON: itemJSON>",
      },
      {
        format: "item count <itemCount: int>",
      },
      {
        format: "item amount <itemAmount: int>",
      },
      {
        format: "item property...",
      },
      {
        format: [
          "item slot <inventorySlotNumber: int|~> lore <loreArray: escapableStringJSON>",
          "item slot <inventorySlotNumber: int|~> lorene <loreArray: JSON>",
          "item slot <inventorySlotNumber: int|~> name <name: escapableString>",
          "item slot <inventorySlotNumber: int|~> json <itemJSON: itemJSON>",
          "item slot <inventorySlotNumber: int|~> jsonb <itemJSON: itemJSON>",
        ],
      },
      {
        format: "§citem components...",
      },
    ],
    command_version: "5.0.0",
    description: "",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:item",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "itfill",
    escregexp: {
      v: "^itfill$",
    },
    formats: ["Too many to list. Use the \\help command to see the syntax."],
    command_version: "29.100.1",
    description:
      "Same as the \\ifill command except for the fact that it temporarily spawns a tickingarea to load in the chunks where the blocks will be filled. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:itfill",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "ithollow",
    escregexp: {
      v: "^ithollow$",
    },
    formats: [
      {
        format:
          "ithollow <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "ithollow <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "7.12.0",
    description:
      "Same as the \\ihollow command except for the fact that it temporarily spawns a tickingarea to load in the chunks where the blocks will be filled. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:ithollow",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "itoutline",
    escregexp: {
      v: "^itoutline$",
    },
    formats: [
      {
        format:
          "itoutline <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "itoutline <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "7.12.0",
    description:
      "Same as the \\ioutline command except for the fact that it temporarily spawns a tickingarea to load in the chunks where the blocks will be filled. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:itoutline",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "itpillars",
    escregexp: {
      v: "^itpillars$",
    },
    formats: [
      {
        format:
          "itpillars <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "itpillars <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "7.12.0",
    description:
      "Same as the \\ipillars command except for the fact that it temporarily spawns a tickingarea to load in the chunks where the blocks will be filled. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:itpillars",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "itwalls",
    escregexp: {
      v: "^itwalls$",
    },
    formats: [
      {
        format:
          "itwalls <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "itwalls <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "7.12.0",
    description:
      "Same as the \\iwalls command except for the fact that it temporarily spawns a tickingarea to load in the chunks where the blocks will be filled. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:itwalls",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "iwalls",
    escregexp: {
      v: "^iwalls$",
    },
    formats: [
      {
        format:
          "iwalls <from: x y z> <to: x y z> <tileName: Block> <blockStates: block states|JSON|Array> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
      {
        format:
          "iwalls <from: x y z> <to: x y z> <tileName: Block> [replaceTileName: Block] [replaceBlockStates: block states|JSON|Array]",
      },
    ],
    command_version: "6.12.0",
    description:
      "Same as the \\ifill command except for the fact that it only fills the walls of the specified area. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:iwalls",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "jumpto",
    escregexp: {
      v: "^jumpto$",
    },
    aliases: [
      {
        commandName: "j",
        escregexp: {
          v: "^j$",
        },
      },
    ],
    formats: [
      {
        format: "jumpto",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:jumpto",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "kick",
    escregexp: {
      v: "^kick$",
    },
    formats: [
      {
        format: "kick <players: targetSelector> [reason: string]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "players", "server"],
    commandSettingsId: "built-inCommandSettings:kick",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "listbans",
    escregexp: {
      v: "^listbans$",
    },
    aliases: [
      {
        commandName: "getbans",
        escregexp: {
          v: "^getbans$",
        },
      },
    ],
    formats: [
      {
        format: "listbans",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server"],
    commandSettingsId: "built-inCommandSettings:listbans",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "listidbans",
    escregexp: {
      v: "^listidbans$",
    },
    aliases: [
      {
        commandName: "getidbans",
        escregexp: {
          v: "^getidbans$",
        },
      },
    ],
    formats: [
      {
        format: "listidbans",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server"],
    commandSettingsId: "built-inCommandSettings:listidbans",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "listnamebans",
    escregexp: {
      v: "^listnamebans$",
    },
    aliases: [
      {
        commandName: "getnamebans",
        escregexp: {
          v: "^getnamebans$",
        },
      },
    ],
    formats: [
      {
        format: "listnamebans",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server"],
    commandSettingsId: "built-inCommandSettings:listnamebans",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "liststructures",
    escregexp: {
      v: "^liststructures$",
    },
    aliases: [
      {
        commandName: "getstructures",
        escregexp: {
          v: "^getstructures$",
        },
      },
    ],
    formats: [
      {
        format: "liststructures",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "blocks"],
    commandSettingsId: "built-inCommandSettings:liststructures",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "mainmenu",
    escregexp: {
      v: "^mainmenu$",
    },
    aliases: [
      {
        commandName: "menu",
        escregexp: {
          v: "^menu$",
        },
      },
      {
        commandName: "mm",
        escregexp: {
          v: "^mm$",
        },
      },
    ],
    formats: [
      {
        format: "mainmenu",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:mainmenu",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "managecommands",
    escregexp: {
      v: "^managecommands$",
    },
    aliases: [
      {
        commandName: "mngcmds",
        escregexp: {
          v: "^mngcmds$",
        },
      },
    ],
    formats: [
      {
        format: "managecommands",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:managecommands",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "headAdmin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "manageplayers",
    escregexp: {
      v: "^manageplayers$",
    },
    aliases: [
      {
        commandName: "mngplyrs",
        escregexp: {
          v: "^mngplyrs$",
        },
      },
    ],
    formats: [
      {
        format: "manageplayers",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:manageplayers",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "managescriptautoeval",
    escregexp: {
      v: "^managescriptautoeval$",
    },
    formats: [
      {
        format: "managescriptautoeval",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:managescriptautoeval",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "maxhealth",
    escregexp: {
      v: "^maxhealth$",
    },
    formats: [
      {
        format: "maxhealth",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "entities"],
    commandSettingsId: "built-inCommandSettings:maxhealth",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "messageui",
    escregexp: {
      v: "^messageui$",
    },
    aliases: [
      {
        commandName: "msgui",
        escregexp: {
          v: "^msgui$",
        },
      },
    ],
    formats: [
      {
        format: "messageui",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:messageui",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "minhealth",
    escregexp: {
      v: "^minhealth$",
    },
    formats: [
      {
        format: "minhealth",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "entities"],
    commandSettingsId: "built-inCommandSettings:minhealth",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§6",
    commandName: "morph",
    escregexp: {
      v: "^morph$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "1.0.1",
    description: "",
    category: ["Entity Scale Add-On"],
    commandSettingsId: "built-inCommandSettings:morph",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "notificationsettings",
    escregexp: {
      v: "^notificationsettings$",
    },
    aliases: [
      {
        commandName: "notificationssettings",
        escregexp: {
          v: "^notificationssettings$",
        },
      },
    ],
    formats: [
      {
        format: "notificationsettings",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:notificationsettings",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "offlineinfo",
    escregexp: {
      v: "^offlineinfo$",
    },
    formats: [
      {
        format: "offlineinfo <player: playerName>",
      },
    ],
    command_version: "1.1.0",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineinfo",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "offlineinfoescaped",
    escregexp: {
      v: "^offlineinfoescaped$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "0.1.0-alpha.12",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineinfoescaped",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    notes: "§r§cThis command is very laggy.",
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "offlineinforaw",
    escregexp: {
      v: "^offlineinforaw$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "1.0.0-rc.1",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineinforaw",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "offlineinfourl",
    escregexp: {
      v: "^offlineinfourl$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "1.0.0-rc.1",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineinfourl",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "offlineinvsee",
    escregexp: {
      v: "^offlineinvsee$",
    },
    formats: [
      {
        format: "offlineinvsee <player: playerName>",
      },
    ],
    command_version: "1.2.0",
    description: "",
    category: ["players", "invsee"],
    commandSettingsId: "built-inCommandSettings:offlineinvsee",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "offlineuuidinfo",
    escregexp: {
      v: "^offlineuuidinfo$",
    },
    formats: [
      {
        format: "offlineuuidinfo <playerUUID: UUID>",
      },
    ],
    command_version: "1.1.0",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineuuidinfo",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "offlineuuidinfoescaped",
    escregexp: {
      v: "^offlineuuidinfoescaped$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "0.1.0-alpha.3",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineuuidinfoescaped",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    notes: "§r§cThis command is very laggy.",
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "offlineuuidinforaw",
    escregexp: {
      v: "^offlineuuidinforaw$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "1.0.0-rc.1",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineuuidinforaw",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "offlineuuidinfourl",
    escregexp: {
      v: "^offlineuuidinfourl$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "1.0.0-rc.1",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:offlineuuidinfourl",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "offlineuuidinvsee",
    escregexp: {
      v: "^offlineuuidinvsee$",
    },
    formats: [
      {
        format: "offlineuuidinvsee <playerUUID: UUID>",
      },
    ],
    command_version: "1.2.0",
    description: "",
    category: ["players", "invsee"],
    commandSettingsId: "built-inCommandSettings:offlineuuidinvsee",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "phase",
    escregexp: {
      v: "^phase$",
    },
    formats: [
      {
        format: "phase",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:phase",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "playershopsystemsettings",
    escregexp: {
      v: "^playershopsystemsettings$",
    },
    aliases: [
      {
        commandName: "playershopsyssettings",
        escregexp: {
          v: "^playershopsyssettings$",
        },
      },
      {
        commandName: "plyrshopsyssettings",
        escregexp: {
          v: "^plyrshopsyssettings$",
        },
      },
    ],
    formats: [
      {
        format: "playershopsystemsettings",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:playershopsystemsettings",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: [],
    formatting_code: "§r§f",
    commandName: "playermenu",
    escregexp: {
      v: "^playermenu$",
    },
    aliases: [
      {
        commandName: "pmenu",
        escregexp: {
          v: "^pmenu$",
        },
      },
      {
        commandName: "pm",
        escregexp: {
          v: "^pm$",
        },
      },
    ],
    formats: [
      {
        format: "playermenu",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:playermenu",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "everyone",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "printlayers",
    escregexp: {
      v: "^printlayers$",
    },
    formats: [
      {
        format: "printlayers",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:printlayers",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "pthru",
    escregexp: {
      v: "^pthru$",
    },
    formats: [
      {
        format: "pthru",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:pthru",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "rank",
    escregexp: {
      v: "^rank$",
    },
    formats: [
      {
        format: "rank <players: targetSelector> <mode: add|remove> <tag: string>",
      },
      {
        format: "rank <players: targetSelector> clear",
      },
    ],
    command_version: "1.0.0",
    description: "Adds, removes, or clears ranks from a player. ",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:rank",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "remexp",
    escregexp: {
      v: "^remexp$",
    },
    formats: [
      {
        format: "remexp [radius: number]",
      },
    ],
    command_version: "2.3.0",
    description:
      "Removes explosive blocks and entities in the specified radius, the radius defaults to 10 if not specified. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:remexp",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "remexpentity",
    escregexp: {
      v: "^remexpentity$",
    },
    aliases: [
      {
        commandName: "rempexpen",
        escregexp: {
          v: "^rempexpen$",
        },
      },
      {
        commandName: "remexpe",
        escregexp: {
          v: "^remexpe$",
        },
      },
    ],
    formats: [
      {
        format: "remexpentity [radius: number[?=10]]",
      },
    ],
    command_version: "2.4.0",
    description:
      "Removes explosive entities in the specified radius, the radius defaults to 10 if not specified.",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:remexpentity",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "remexpne",
    escregexp: {
      v: "^remexpne$",
    },
    formats: [
      {
        format: "remexpne [radius: number]",
      },
    ],
    command_version: "2.3.0",
    description:
      "Removes explosive blocks in the specified radius, the radius defaults to 10 if not specified. ",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:remexpne",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "remove",
    escregexp: {
      v: "^remove$",
    },
    aliases: [
      {
        commandName: "rem",
        escregexp: {
          v: "^rem$",
        },
      },
      {
        commandName: "rement",
        escregexp: {
          v: "^rement$",
        },
      },
    ],
    formats: [
      {
        format: "remove",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:remove",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "removeotheritemenchantments",
    escregexp: {
      v: "^removeotheritemenchantments$",
    },
    aliases: [
      {
        commandName: "remotheritemenchants",
        escregexp: {
          v: "^remotheritemenchants$",
        },
      },
      {
        commandName: "roie",
        escregexp: {
          v: "^roie$",
        },
      },
    ],
    formats: [
      {
        format: "removeotheritemenchantments",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["server", "items"],
    commandSettingsId: "built-inCommandSettings:removeotheritemenchantments",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "replacenear",
    escregexp: {
      v: "^replacenear$",
    },
    formats: [
      {
        format: "replacenear",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:replacenear",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "run",
    escregexp: {
      v: "^run$",
    },
    formats: [
      {
        format: "run <tickDelay: int>=1> <command: command>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:run",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§6",
    commandName: "scale",
    escregexp: {
      v: "^scale$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["Entity Scale Add-On"],
    commandSettingsId: "built-inCommandSettings:scale",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "scanenderchest",
    escregexp: {
      v: "^scanenderchest$",
    },
    aliases: [
      {
        commandName: "ecinvsee",
        escregexp: {
          v: "^ecinvsee$",
        },
      },
      {
        commandName: "scnendchest",
        escregexp: {
          v: "^scnendchest$",
        },
      },
    ],
    formats: [
      {
        format: "scanenderchest [targets: targetSelector|~]",
      },
    ],
    command_version: "1.3.0",
    description: "",
    category: ["players", "containers/inventories", "invsee"],
    commandSettingsId: "built-inCommandSettings:scanenderchest",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "scanenderchestc",
    escregexp: {
      v: "^scanenderchestc$",
    },
    aliases: [
      {
        commandName: "ecinvseec",
        escregexp: {
          v: "^ecinvseec$",
        },
      },
      {
        commandName: "scnendchestc",
        escregexp: {
          v: "^scnendchestc$",
        },
      },
    ],
    formats: [
      {
        format: "scanenderchestc [target: string|~]",
      },
    ],
    command_version: "1.4.0",
    description: "",
    category: ["players", "containers/inventories", "invsee"],
    commandSettingsId: "built-inCommandSettings:scanenderchestc",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "moderator",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "selectioninfo",
    escregexp: {
      v: "^selectioninfo$",
    },
    aliases: [
      {
        commandName: "selinfo",
        escregexp: {
          v: "^selinfo$",
        },
      },
      {
        commandName: "seli",
        escregexp: {
          v: "^seli$",
        },
      },
    ],
    formats: [
      {
        format: "selectioninfo",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:selectioninfo",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "selectionrender",
    escregexp: {
      v: "^selectionrender$",
    },
    aliases: [
      {
        commandName: "selrender",
        escregexp: {
          v: "^selrender$",
        },
      },
      {
        commandName: "selr",
        escregexp: {
          v: "^selr$",
        },
      },
    ],
    formats: [
      {
        format: "selectionrender",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "worldedit"],
    commandSettingsId: "built-inCommandSettings:selectionrender",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "servershopsystemsettings",
    escregexp: {
      v: "^servershopsystemsettings$",
    },
    aliases: [
      {
        commandName: "servershopsyssettings",
        escregexp: {
          v: "^servershopsyssettings$",
        },
      },
      {
        commandName: "srvrshopsyssettings",
        escregexp: {
          v: "^srvrshopsyssettings$",
        },
      },
    ],
    formats: [
      {
        format: "servershopsystemsettings",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:servershopsystemsettings",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "setitem",
    escregexp: {
      v: "^setitem$",
    },
    formats: [
      {
        format: "setitem <item: itemType> <amount: int> <slot: int>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:setitem",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "setitemb",
    escregexp: {
      v: "^setitemb$",
    },
    formats: [
      {
        format: "setitemb <itemJSON: itemJSON> [slot: int] [playerTargets: targetSelector]",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:setitemb",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "setnametag",
    escregexp: {
      v: "^setnametag$",
    },
    aliases: [
      {
        commandName: "setplayernametag",
        escregexp: {
          v: "^setplayernametag$",
        },
      },
      {
        commandName: "setentitynametag",
        escregexp: {
          v: "^setentitynametag$",
        },
      },
    ],
    formats: [],
    command_version: "1.1.0",
    description: "",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:setnametag",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "settings",
    escregexp: {
      v: "^settings$",
    },
    formats: [
      {
        format: "settings",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:settings",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "shopsystemsettings",
    escregexp: {
      v: "^shopsystemsettings$",
    },
    aliases: [
      {
        commandName: "shopsyssettings",
        escregexp: {
          v: "^shopsyssettings$",
        },
      },
    ],
    formats: [
      {
        format: "shopsystemsettings",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:shopsystemsettings",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "shuffleinventory",
    escregexp: {
      v: "^shuffleinventory$",
    },
    aliases: [
      {
        commandName: "invshuffle",
        escregexp: {
          v: "^invshuffle$",
        },
      },
    ],
    formats: [
      {
        format: "shuffleinventory [player: string|~]",
      },
    ],
    command_version: "0.2.2-beta.2",
    description: "",
    category: ["players"],
    commandSettingsId: "built-inCommandSettings:shuffleinventory",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "snapshot",
    escregexp: {
      v: "^snapshot$",
    },
    formats: [
      {
        format: "snapshot",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server", "worldedit"],
    commandSettingsId: "built-inCommandSettings:snapshot",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "WorldEdit",
  },
  {
    type: "built-in",
    requiredTags: [],
    formatting_code: "§r§f",
    commandName: "spawn",
    escregexp: {
      v: "^spawn$",
    },
    formats: [
      {
        format: "spawn",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world", "players", "warps", "misc"],
    commandSettingsId: "built-inCommandSettings:spawn",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "everyone",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§c",
    commandName: "spawnitem",
    escregexp: {
      v: "^spawnitem$",
    },
    formats: [
      {
        format: "spawnitem",
      },
    ],
    command_version: "0.0.0",
    description: "",
    category: ["entities", "items"],
    commandSettingsId: "built-inCommandSettings:spawnitem",
    deprecated: false,
    functional: false,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "stopalldbintervals",
    escregexp: {
      v: "^stopalldbintervals$",
    },
    formats: [
      {
        format: "stopalldbintervals",
      },
    ],
    command_version: "1.0.0",
    description: "Stops all known intervals from system.runInterval() for this add-on.",
    category: ["system"],
    commandSettingsId: "built-inCommandSettings:stopalldbintervals",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "headAdmin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "stopallsaintervals",
    escregexp: {
      v: "^stopallsaintervals$",
    },
    formats: [
      {
        format: "stopallsaintervals",
      },
    ],
    command_version: "1.0.0",
    description:
      "Stops all known intervals from system.runInterval() for the entity scale add-on if it is active and is on version 1.14.0 or newer.",
    category: ["system", "Entity Scale Add-On"],
    commandSettingsId: "built-inCommandSettings:stopallsaintervals",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "headAdmin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "stopgen",
    escregexp: {
      v: "^stopgen$",
    },
    formats: [
      {
        format: "stopgen <generatorId: int>",
      },
    ],
    command_version: "1.0.0",
    description: "Stops generator functions such as the \\igfill and \\iogfill commands. ",
    category: ["misc"],
    commandSettingsId: "built-inCommandSettings:stopgen",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "structure",
    escregexp: {
      v: "^structure$",
    },
    formats: [
      {
        format: "structure",
      },
    ],
    command_version: "2.3.18",
    description: "",
    category: ["system", "world", "server", "blocks"],
    commandSettingsId: "built-inCommandSettings:structure",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "summon",
    escregexp: {
      v: "^summon$",
    },
    formats: [
      {
        format: "summon",
      },
    ],
    command_version: "1.3.4",
    description: "",
    category: ["entities"],
    commandSettingsId: "built-inCommandSettings:summon",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "swapinventories",
    escregexp: {
      v: "^swapinventories$",
    },
    aliases: [
      {
        commandName: "invswap",
        escregexp: {
          v: "^invswap$",
        },
      },
    ],
    formats: [
      {
        format: "swapinventories <player1: string|~> <player2: string|~>",
      },
    ],
    command_version: "0.2.1-beta.1",
    description: "Swaps the inventory, offhand, hotbar, and armor of two specified players. ",
    category: ["players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:swapinventories",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§n",
    commandName: "swapinventoriesb",
    escregexp: {
      v: "^swapinventoriesb$",
    },
    aliases: [
      {
        commandName: "invswapb",
        escregexp: {
          v: "^invswapb$",
        },
      },
    ],
    formats: [
      {
        format: "swapinventoriesb <player1: string|~> <player2: string|~>",
      },
    ],
    command_version: "1.4.1",
    description: "Swaps the inventory and hotbar of two specified players. ",
    category: ["players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:swapinventoriesb",
    deprecated: true,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "swapitems",
    escregexp: {
      v: "^swapitems$",
    },
    formats: [
      {
        format: "swapitems <slot: number|~> <otherSlot: number|~> <otherPlayer: playerName>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:swapitems",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "swaprows",
    escregexp: {
      v: "^swaprows$",
    },
    aliases: [
      {
        commandName: "rowswap",
        escregexp: {
          v: "^rowswap$",
        },
      },
      {
        commandName: "rs",
        escregexp: {
          v: "^rs$",
        },
      },
    ],
    formats: [
      {
        format:
          "swaprows <row1: float|{equipment}> [row2: (float|{equipment})[?=0]] [player1: target[?=@s]] [player2: target[?=@s]]",
      },
    ],
    command_version: "2.0.0",
    description:
      "Swaps two inventory rows, if the row number is not a whole number then it will offset the row selection by that much.",
    category: ["players", "containers/inventories"],
    commandSettingsId: "built-inCommandSettings:swaprows",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "takeitem",
    escregexp: {
      v: "^takeitem$",
    },
    formats: [
      {
        format: "takeitem <fromSlot: number|~> <fromPlayer: playerName>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:takeitem",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "terminal",
    escregexp: {
      v: "^terminal$",
    },
    aliases: [
      {
        commandName: "cmdrunner",
        escregexp: {
          v: "^cmdrunner$",
        },
      },
    ],
    formats: [
      {
        format: "terminal",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["uis"],
    commandSettingsId: "built-inCommandSettings:terminal",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "thru",
    escregexp: {
      v: "^thru$",
    },
    formats: [
      {
        format: "thru",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:thru",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "timezone",
    escregexp: {
      v: "^timezone$",
    },
    aliases: [
      {
        commandName: "tz",
        escregexp: {
          v: "^tz$",
        },
      },
    ],
    formats: [
      {
        format: "timezone [UTCOffsetInHours: float]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server"],
    commandSettingsId: "built-inCommandSettings:timezone",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§6",
    commandName: "tint",
    escregexp: {
      v: "^tint$",
    },
    formats: [
      {
        format:
          "tint [red: float|~] [green: float|~] [blue: float|~] [alpha: float|~] [materialType: 0|1] [playerTarget: targetSelector]",
      },
    ],
    command_version: "1.0.4",
    description: "",
    category: ["Entity Scale Add-On"],
    commandSettingsId: "built-inCommandSettings:tint",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "top",
    escregexp: {
      v: "^top$",
    },
    formats: [
      {
        format: "top [-lp]",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["world", "players", "warps"],
    commandSettingsId: "built-inCommandSettings:top",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "tpa",
    escregexp: {
      v: "^tpa$",
    },
    formats: [
      {
        format: "tpa <player: target[allowMultiple=false,playersOnly=true]>",
      },
    ],
    command_version: "2.0.0",
    description: "",
    category: ["players", "warps"],
    commandSettingsId: "built-inCommandSettings:tpa",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "tpaccept",
    escregexp: {
      v: "^tpaccept$",
    },
    formats: [
      {
        format: "tpaccept <player: target[allowMultiple=true,playersOnly=true]>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "warps"],
    commandSettingsId: "built-inCommandSettings:tpaccept",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "tpdeny",
    escregexp: {
      v: "^tpdeny$",
    },
    formats: [
      {
        format: "tpdeny <player: target[allowMultiple=true,playersOnly=true]>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["players", "warps"],
    commandSettingsId: "built-inCommandSettings:tpdeny",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§6",
    commandName: "tps",
    escregexp: {
      v: "^tps$",
    },
    formats: [
      {
        format: "tps",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["Entity Scale Add-On", "system", "world"],
    commandSettingsId: "built-inCommandSettings:tps",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§e",
    commandName: "transferitem",
    escregexp: {
      v: "^transferitem$",
    },
    formats: [
      {
        format: "transferitem <toPlayer: playerName>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["items"],
    commandSettingsId: "built-inCommandSettings:transferitem",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "transformresultatdvindex",
    escregexp: {
      v: "^transformresultatdvindex$",
    },
    formats: [
      {
        format: "transformresultatdvindex",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["server", "items"],
    commandSettingsId: "built-inCommandSettings:transformresultatdvindex",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "up",
    escregexp: {
      v: "^up$",
    },
    formats: [
      {
        format: "up [placeGlass: boolean]",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:up",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "version",
    escregexp: {
      v: "^version$",
    },
    aliases: [
      {
        commandName: "ver",
        escregexp: {
          v: "^ver$",
        },
      },
    ],
    formats: [
      {
        format: "version",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["system", "world", "server"],
    commandSettingsId: "built-inCommandSettings:version",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§6",
    commandName: "visualscale",
    escregexp: {
      v: "^visualscale$",
    },
    formats: [
      {
        format: "visualscale <visualscale: float>",
      },
    ],
    command_version: "1.0.0-beta.1",
    description:
      "Sets the visual scale of the player, the default is 0.9375. The visual scale scales the rendering of the player by a certain amount without changing the hitbox, this can be combined with the regular scale. ",
    category: ["Entity Scale Add-On"],
    commandSettingsId: "built-inCommandSettings:visualscale",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§6",
    commandName: "visualscaleenabled",
    escregexp: {
      v: "^visualscaleenabled$",
    },
    formats: [
      {
        format: "",
      },
    ],
    command_version: "1.0.0-beta.1",
    description: "",
    category: ["Entity Scale Add-On"],
    commandSettingsId: "built-inCommandSettings:visualscaleenabled",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "vthru",
    escregexp: {
      v: "^vthru$",
    },
    formats: [
      {
        format: "vthru",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["world"],
    commandSettingsId: "built-inCommandSettings:vthru",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "w",
    escregexp: {
      v: "^w$",
    },
    formats: [
      {
        format: "w <wName: escapableString>",
      },
    ],
    command_version: "1.1.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:w",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "warp",
    escregexp: {
      v: "^warp$",
    },
    formats: [
      {
        format: "warp <warpName: escapableString>",
      },
    ],
    command_version: "1.1.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:warp",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "warplist",
    escregexp: {
      v: "^warplist$",
    },
    formats: [
      {
        format: "warlist",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:warplist",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "warplistdetails",
    escregexp: {
      v: "^warplistdetails$",
    },
    formats: [
      {
        format: "warplistdetails",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:warplistdetails",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "warplistrawdata",
    escregexp: {
      v: "^warplistrawdata$",
    },
    formats: [
      {
        format: "warplistrawdata",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:warplistrawdata",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "warpremove",
    escregexp: {
      v: "^warpremove$",
    },
    formats: [
      {
        format: "warpremove <warpName: escapableString>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:warpremove",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "warpreset",
    escregexp: {
      v: "^warpreset$",
    },
    formats: [
      {
        format: "warpreset",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:warpreset",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "warpset",
    escregexp: {
      v: "^warpset$",
    },
    formats: [
      {
        format:
          "warpset <dimension: dimension|~> <x: float|~> <y: float|~> <z: float|~> <name: escapableString>",
      },
    ],
    command_version: "1.1.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:warpset",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "wlist",
    escregexp: {
      v: "^wlist$",
    },
    formats: [
      {
        format: "wlist",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:wlist",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "wlistdetails",
    escregexp: {
      v: "^wlistdetails$",
    },
    formats: [
      {
        format: "wlistdetails",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:wlistdetails",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "wlistrawdata",
    escregexp: {
      v: "^wlistrawdata$",
    },
    formats: [
      {
        format: "wlistrawdata",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:wlistrawdata",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "wremove",
    escregexp: {
      v: "^wremove$",
    },
    formats: [
      {
        format: "wremove <wName: escapableString>",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:wremove",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "wreset",
    escregexp: {
      v: "^wreset$",
    },
    formats: [
      {
        format: "wreset",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:wreset",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: ["canUseChatCommands"],
    formatting_code: "§r§f",
    commandName: "wset",
    escregexp: {
      v: "^wset$",
    },
    formats: [
      {
        format:
          "wset <dimension: dimension|~> <x: float|~> <y: float|~> <z: float|~> <name: escapableString>",
      },
    ],
    command_version: "1.1.0",
    description: "",
    category: ["warps"],
    commandSettingsId: "built-inCommandSettings:wset",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
    ultraSecurityModeSecurityLevel: "admin",
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "viewplayershops",
    escregexp: {
      v: "^viewplayershops$",
    },
    formats: [
      {
        format: "viewplayershops",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["shop_system"],
    commandSettingsId: "built-inCommandSettings:viewplayershops",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
  {
    type: "built-in",
    requiredTags: [],
    ultraSecurityModeSecurityLevel: "everyone",
    formatting_code: "§r§f",
    commandName: "viewservershops",
    escregexp: {
      v: "^viewservershops$",
    },
    formats: [
      {
        format: "viewservershops",
      },
    ],
    command_version: "1.0.0",
    description: "",
    category: ["shop_system"],
    commandSettingsId: "built-inCommandSettings:viewservershops",
    deprecated: false,
    functional: true,
    hidden: false,
    enabled: true,
  },
] as {
  type: "built-in";
  requiredTags: string[];
  ultraSecurityModeSecurityLevel:
    | "owner"
    | "headAdmin"
    | "admin"
    | "moderator"
    | "WorldEdit"
    | "everyone";
  formatting_code: string;
  commandName: string;
  escregexp: { v: string; f?: string };
  formats: any;
  command_version: string;
  description: string;
  commandSettingsId: string;
  aliases?: { commandName: string; escregexp?: { v?: string; f?: string } }[];
  category?: string | string[];
  deprecated: boolean;
  functional: boolean;
  hidden: boolean;
  enabled: boolean;
  undoSupported?: -2 | -1 | 0 | 1;
}[];

enum commanddescriptions {
  //"ban" = "Bans a player.",
  "align" = "Centers you on the x and z axis on the block you are currently at.",
  "aligncenter" = "Centers you on the x, y, and z axis on the block you are currently at.",
  "binvsee" = "Displays the contents of the specified block's inventory.",
  "chatcommandui" = "Opens up a menu where you can type a chat command to run with no character limits.",
  "chatsendui" = "Opens up a menu where you can type a chat message to send with no character limits.",
  "chunkinfo" = "Displays info about the current chunk.",
  "clear" = "Clears a player's inventory.",
  "clearenderchest" = "Clears a player's ender chest.",
  "clearenderchestslot" = "Clears a slot of a player's ender chest.",
  "cloneitem" = "Clones the item in your hand to the specified player's inventory.",
  "closeuis" = "Closes any open script form uis for one or more players.",
  "closeui" = "Closes any open script form uis for one or more players.",
  "cmdui" = "Opens up a menu where you can type a chat command to run with no character limits.",
  "compressitems" = "Compresses your inventory into 2 chests and inserts those chests into your inventory.",
  "compressitemsshulker" = "Compresses your inventory into 2 shulker boxes and inserts those shulker boxes into your inventory.",
  "compressitemscontainer" = "Compresses your inventory into a specified container type and inserts those containers into your inventory.",
  "copyitem" = "Copies the item in your hand to the specified slot of the specified player's inventory.",
  "createexplosion" = "Creates an explosion.",
  "datapickblock" = "Pick Blocks the block that your are looking at while copying the nbt data of the block as well, just like using the pick block button while holding CTRL on your keyboard.",
  "debugstickdyingmode" = "Turns debug stick dying mode on or off, which allows you to dye debug sticks in a cauldron.",
  "defaulthealth" = "Sets the health of entities to their default health values.",
  "drain" = "Drains liquids in the specified radius.",
  "dupeitem" = "Duplicates the item in your hand.",
  "einvsee" = "Displays the contents of the specified entity's inventory.",
  "einvseeb" = "The original version of the \\einvsee command that does not scan equipment slots.",
  "ecinvsee" = "Scans a player's ender chest and displays the contents of it.",
  "ecinvseec" = "Scans a player's ender chest and displays the contents of it.",
  "editorstick" = "Opens the Editor Stick UI.",
  "editorstickb" = "Opens the Editor Stick B UI.",
  "editorstickc" = "Opens the Editor Stick C UI.",
  "enchantmentbarrels" = "Places a structure containing Smithing Table Enchanted Books with every enchantment of the specified level.",
  "enderchest" = "Spawns an ender chest where you are standing.",
  "entityscaleversion" = "Displays the currently detected versions of 8Crafter's Entity Scale Add-On that is active on the world.",
  // special a that causes text to use noto sans instead of mojangles: а
  "eval" = `Runs the specified JavaScript / Script API code. This can be very useful for doing things such as running more advanced commands with JavaScript variables and conditions, or running commands with JavaScript escape codes(for example to put multiple lines of text in the name of an entity or use special unicode characters in commands without needing to copy and paste them into your game). (Note: The names of the server modules are mcServer for the minecraft/Server module, mcServerUI for the minecraft/ServerUI module, and GameTest for the minecraft/GameTest module). Here are some examples:

Send a tellraw command message:
\\eval world.sendMessage("Example message\\nNew Line\\nSender's Name: " + player.name + "\\nToken Emoji: \\uE105")

Give all players health boost with the level equal to their XP level:
\\eval world.getAllPlayers().forEach((p)=>{p.addEffect("health_boost", 200, {amplifier: player.level, showParticles: false}); })`,
  "execute" = "Executes a command on behalf of one or more entities.",
  "extinguish" = "Extinguishes fire and soul fire in the specified radius.",
  "extrafeaturessettings" = "Opens up the extra features settings menu.",
  "extrasettings" = "Opens up the extra features settings menu.",
  "fill" = "Fills all or parts of a reigon with a specific block, can use any block type including NBT Editor only ones.",
  "fillillegal" = "Fills a player's inventory with illegal items.",
  "fillinventory" = "Fills a player's inventory with items based on the provided itemJSON.",
  "filljunk" = "Fills a player's inventory with junk items.",
  "fillop" = "Fills a player's inventory with op items.",
  "fillrandom" = "Fills a player's inventory with random items.",
  "getuuid" = "Gets the UUID of the specified entity.",
  "getworldspawnpoint" = "Gets the current world spawn point.",
  "give" = "Inserts the specified number of the specified item type into the player's inventory. Note: The item parameter can be set to any valid item id, even ones that can't be used with the normal vanilla /give, such as ones that require an NBT editor to obtain, for example you could use minecraft:netherreactor to get a Nether Reactor Core. The count parameter can be any value from 0-255.",
  "giveb" = "Creates a new stack of the specified item type of the specified size in the player's inventory. Note: The item parameter can be set to any valid item id, even ones that can't be used with the normal vanilla /give, such as ones that require an NBT editor to obtain, for example you could use minecraft:netherreactor to get a Nether Reactor Core. The count parameter can be any value from 0-255.",
  "givec" = "Gives you an item stack based on the provided itemJSON in your next empty inventory slot.",
  "gma" = "Sets your gamemode to adventure.",
  "gmc" = "Sets your gamemode to creative.",
  "gmd" = "Sets your gamemode to default.",
  "gmp" = "Sets your gamemode to spectator.",
  "gmr" = "Sets your gamemode to a random gamemode.",
  "gms" = "Sets your gamemode to survival.",
  "gohome" = "Warps to a home.",
  "ground" = "Teleports you down to the closest block below your feet.",
  "h" = "Swaps your hotbar with the specified hotbar preset, optionally specifying a row of the container block to swap your hotbar with.",
  "h#" = "Swaps your hotbar with the specified hotbar preset, optionally specifying a row of the container block to swap your hotbar with.",
  "hcontents" = "Lists the contents of all of your currently saved hotbar presets. If no preset ID is specified, then it displays the contents of each of your hotbar presets, otherwise it will only display the contents of the specified hotbar preset.",
  "heal" = "Heals entities.",
  "health" = "Modifies the health of entities.",
  "help" = "Provides help.",
  "hlist" = "Lists all of your currently saved hotbar presets.",
  "home" = "Sets/Removes/Warps to a home.",
  "hset" = "Sets a hotbar preset.",
  "idtfill" = "Fills all or parts of a reigon with a specific block, with no limits, also temporarily spawns a tickingarea to load in chunks around it, also allows specifying the integrity of the fill, can use any block type including NBT Editor only ones.",
  "ifill" = "Fills all or parts of a reigon with a specific block, with no limits, can use any block type including NBT Editor only ones.",
  "ifillb" = "Fills all or parts of a reigon with a specific block, with no limits, can use any block type including NBT Editor only ones.",
  "ifillc" = "Fills all or parts of a reigon with a specific block, with no limits, can use any block type including NBT Editor only ones.",
  "ifilld" = "Fills all or parts of a reigon with a specific block, with no limits, can use any block type including NBT Editor only ones.",
  "igfill" = "Fills all or parts of a reigon with a specific block, with no limits, uses a generator function so it never will produce a script hang error but it is extremely slow, can use any block type including NBT Editor only ones.",
  "ignite" = "Ignites blocks in the specified radius.",
  "invfillillegal" = "Fills a player's inventory with illegal items.",
  "invfill" = "Fills a player's inventory with items based on the provided itemJSON.",
  "invfilljunk" = "Fills a player's inventory with junk items.",
  "invfillop" = "Fills a player's inventory with op items.",
  "invfillrandom" = "Fills a player's inventory with random items.",
  "invsee" = "Displays the contents of the specified player's inventory.",
  "invseep" = "Displays the contents of the specified player's inventory, including the dynamic properties set on the items.",
  "invseeuuidmode" = "Displays the contents of the inventory of the entity with the specified UUID.",
  "invshuffle" = "Shuffles the inventory of the specified player",
  "invswap" = "Swaps the inventories of 2 players.",
  "invswapb" = "Swaps the inventories of 2 players.",
  "iogfill" = "Fills all or parts of a reigon with a specific block, with no limits, uses a generator function so it never will produce a script hang error but it is extremely slow, can use any block type including NBT Editor only ones.",
  "item" = "Super advanced item modification command.",
  "itfill" = "Fills all or parts of a reigon with a specific block, with no limits, also temporarily spawns a tickingarea to load in chunks around it, can use any block type including NBT Editor only ones.",
  "itfillc" = "Fills all or parts of a reigon with a specific block, with no limits, also temporarily spawns a tickingarea to load in chunks around it, can use any block type including NBT Editor only ones.",
  "j" = "Teleports you to the block you are looking at.",
  "jumpto" = "Teleports you to the block you are looking at.",
  "kick" = "Kicks one or more players from the server.",
  "listbans" = "Lists all bans.",
  "listidbans" = "Lists all id bans.",
  "listnamebans" = "Lists all name bans.",
  "liststructures" = "Lists all saved structures.",
  "mainmenu" = "Opens up the main menu.",
  //"managebans" = "Opens up the manage bans menu.",
  "managecommands" = "Opens up the commands editor menu.",
  "manageplayers" = "Opens up the manage players menu.",
  "managescriptautoeval" = "Opens up the Script Auto Eval settings menu.",
  "maxhealth" = "Heals entities.",
  "menu" = "Opens up the main menu.",
  "messageui" = "Opens up a menu where you can type a chat message or command to send or run with no character limits.",
  "minhealth" = "Sets the health of entities to their minimum health values.",
  "mm" = "Opens up the main menu.",
  "mngcmds" = "Opens up the commands editor menu.",
  "mngplyrs" = "Opens up the manage players menu.",
  //"money" = "Used for the money system [§r§1Indev§r].",
  "notificationsettings" = "Opens up the notifications settings menu.",
  "notificationssettings" = "Opens up the notifications settings menu.",
  "offlineinfo" = "Displays the saved player data of the specified player.",
  "offlineuuidinfo" = "Displays the saved player data of the player with the specified UUID.",
  "offlineinvsee" = "Displays the saved contents of the specified player's inventory.",
  "offlineuuidinvsee" = "Displays the saved contents of the inventory of the player with the specified UUID.",
  //"permaban" = "Permanently bans a player.",
  "playershopsyssettings" = "Opens up the player shop system settings menu.",
  "playershopsystemsettings" = "Opens up the player shop system settings menu.",
  "plyrshopsyssettings" = "Opens up the player shop system settings menu.",
  "printlayers" = "Displays a list of all the non-air blocks at your specified x and z coordinates.",
  "rank" = "Manages ranks stored in players.",
  "remexp" = "Removes explosive blocks and entities in the specified radius, the radius defaults to 10 if not specified. Removes TNT and respawn anchors if in the overworld, removes TNT and beds if in the nether, and removes TNT, beds, and respawn anchors if in the end.",
  "remexpne" = "Removes explosive blocks in the specified radius, the radius defaults to 10 if not specified. Removes TNT and respawn anchors if in the overworld, removes TNT and beds if in the nether, and removes TNT, beds, and respawn anchors if in the end. Unlike the \remexp command, this one does not remove explosive entities, it only removes explosive blocks.",
  "remexpentity" = "Removes explosive entities in the specified radius, the radius defaults to 10 if not specified.",
  "replacenear" = "Replaces blocks of the specified type with another specified block type in the specified radius.",
  "run" = "Runs the specified command after the specified number of ticks.",
  "scanenderchest" = "Scans a player's ender chest and displays the contents of it.",
  "scanenderchestc" = "Scans a player's ender chest and displays the contents of it.",
  "scnendchst" = "Scans a player's ender chest and displays the contents of it.",
  "scnendchstc" = "Scans a player's ender chest and displays the contents of it.",
  "selectioninfo" = "Displays info about the current selection.",
  "selinfo" = "Displays info about the current selection.",
  "seli" = "Displays info about the current selection.",
  "selectionrender" = "Uses particles to render the outline of the selected area. The particles will disappear after 10 seconds. Unlike the particles display when using the selection tool to select the area, these particles are visible to everyone.",
  "selrender" = "Uses particles to render the outline of the selected area. The particles will disappear after 10 seconds. Unlike the particles display when using the selection tool to select the area, these particles are visible to everyone.",
  "selr" = "Uses particles to render the outline of the selected area. The particles will disappear after 10 seconds. Unlike the particles display when using the selection tool to select the area, these particles are visible to everyone.",
  "sendui" = "Opens up a menu where you can type a chat message to send with no character limits.",
  "servershopsyssettings" = "Opens up the server shop system settings menu.",
  "servershopsystemsettings" = "Opens up the server shop system settings menu.",
  "setitem" = "Creates a new stack of the specified item type of the specified size in the specified slot of the specified player's inventory. Note: The item parameter can be set to any valid item id, even ones that can't be used with the normal vanilla /give, such as ones that require an NBT editor to obtain, for example you could use minecraft:netherreactor to get a Nether Reactor Core. The count parameter can be any value from 0-255.",
  "setitemb" = "Replaces the item stack in the specified inventory slot with an item stack based on the provided itemJSON.",
  "setnametag" = "Sets the name tag of a player or entity.",
  "setplayernametag" = "Sets the name tag of a player or entity.",
  "setentitynametag" = "Sets the name tag of a player or entity.",
  "settings" = "Opens up the settings menu.",
  "shopsyssettings" = "Opens up the shop system settings menu.",
  "shopsystemsettings" = "Opens up the shop system settings menu.",
  "shuffleinventory" = "Shuffles the inventory of the specified player.",
  "spawn" = "Teleports you to spawn.",
  "srvrshopsyssettings" = "Opens up the server shop system settings menu.",
  "stopalldbintervals" = "Stops all known intervals from system.runInterval() for this add-on.",
  "stopallsaintervals" = "Stops all known intervals from system.runInterval() for the entity scale add-on if it is active and is on version 1.14.0 or newer.",
  "structure" = "Manages structures.",
  "summon" = "Summons entities.",
  "swapinventories" = "Swaps the inventories of 2 players.",
  "swapinventoriesb" = "Swaps the inventories of 2 players.",
  "swapitems" = "Swaps an item in a slot of one player's inventory with another slot of another player's inventory.",
  "swaprows" = "Swaps two inventory rows, if the row number is not a whole number then it will offset the row selection by that much.",
  "takeitem" = "Steals an item from another player's inventory and puts it into yoru inventory.",
  //"tempban" = "Temporarily bans a player.",
  "terminal" = "Opens up the command runner/terminal menu.",
  "timezone" = "Sets your timezone to the specific UTC offset in hours.",
  "thru" = "Teleports to the other side of the wall/floor/ceilling that you are looking at.",
  "phase" = "Teleports you 2 blocks in the direction you are looking.",
  "pthru" = "Teleports to the other side of the wall/floor/ceilling that you are looking at. Even if it is only a one block tall gap at the other end.",
  "vthru" = "Teleports to the other side of the wall/floor/ceilling that you are looking at, even if it would put you into the void.",
  "top" = "Teleports on top of the highest solid block at your x and z coordinates.",
  "tpa" = "Requests to teleport to the specified player.",
  "tpaccept" = "Accepts a player's teleport request.",
  "tpdeny" = "Denies a player's teleport request.",
  "transferitem" = "Transfers the item in your hand to the specified player's inventory.",
  "tz" = "Sets your timezone to the specific UTC offset in hours.",
  //"unban" = "Unbans a player.",
  "up" = "Teleports up the specified number of blocks and places glass below you if placeGlass is not set to false.",
  "version" = "Displays the format version of the add-on.",
  "viewplayershops" = "Opens up the list of public player shops.",
  "viewservershops" = "Opens up the list of public server shops.",
  "warp" = "Warps to the specified global warp.",
  "warplist" = "Lists all global warps.",
  "warplistdetails" = "Lists all global warps with more details.",
  "warplistrawdata" = "Lists the raw data of the global warps.",
  "warpremove" = "Removes the specified global warp.",
  "warpreset" = "Removes all global warps.",
  "warpset" = "Sets a global warp.",
  "wbsettings" = "Opens up the world border system settings menu.",
  "w" = "Warps to the specified private warp.",
  "wlist" = "Lists all private warps.",
  "wlistdetails" = "Lists all private warps with more details.",
  "wlistrawdata" = "Lists the raw data of the private warps.",
  "worldbordersettings" = "Opens up the world border system settings menu.",
  "wremove" = "Removes the specified private warp.",
  "wreset" = "Removes all private warps.",
  "wset" = "Sets a private warp.",
  "chunkban" = "Fills a shulker box with the item in your first hotbar slot and put that shulker box into your first hotbar slot, and repeats this the specified number of times, this can be used to create a chunk ban.",
  "transformresultatdvindex" = "Displays what item a smithing table enchanted book combined with a enchantment transfer smithing template of the specified data value would turn in to.",
  "gettransformst" = "Gives you an enchantment transfer smithing template with the data value needed to combine with a smithing table enchanted book in a smithing table to turn the smithing table enchanted book into the specified item type and data value.",
  "findtransformdvindex" = "Displays the data value of enchantment transfer smithing template needed to combine with a smithing table enchanted book in a smithing table to turn the smithing table enchanted book into the specified item type and data value.",
  "roie" = "Removes all enchantment types from an item except for the item types specified.",
  "remotheritemenchants" = "Removes all enchantment types from an item except for the item types specified.",
  "removeotheritemenchantments" = "Removes all enchantment types from an item except for the item types specified.",
  "butcher" = "Kill all or nearby mobs.",
  "butcherdespawn" = "Despawn all or nearby mobs.",
  "brush" = "Sets the held item as the specified brush type or unbinds the brush from the held item.",
  "snapshot" = "Manages backups and backup areas.",
  "\\\\savestructure" = "Saves the selected area as a structure.",
  "\\\\deletesavedpos" = "Deletes the saved selection with the specified ID.",
  "\\\\listpos" = "Lists all of your saved selections.",
  "\\\\loadpos" = "Loads the saved selection with the specified ID into the pos1, pos2, and posD values.",
  "\\\\savepos" = "Saves your current selection (pos1, pos2, and posD) into a saved selection with the specified ID, that can be loaded in at any time using the \\\\loadpos command.",
  "\\\\cut" = "Cuts the selected area to the clipboard.",
  "\\\\copy" = "Copies the selected area to the clipboard.",
  "\\\\paste" = "Pastes the clipboard to the selected area.",
  "\\\\undo" = "Undoes the last action (from history).",
  "\\\\pos1" = "Sets the pos1 location of the selected area for use in other worldedit commands.",
  "\\\\pos2" = "Sets the pos2 location of the selected area for use in other worldedit commands.",
  "\\\\protectarea" = "Sets the selected area as a protected area.",
  "\\\\backuparea" = "Creates a new backup area convering the entire selected area.",
  "\\\\hpos1" = "Sets the pos1 location of the selected area to the block that you are looking at for use in other worldedit commands.",
  "\\\\hpos2" = "Sets the pos2 location of the selected area to the block that you are looking at for use in other worldedit commands.",
  "\\\\chunk" = "Sets the pos1 and pos2 locations of the selected area to contain the entire chunk that you are currently in for use in other worldedit commands.",
  "\\\\shift" = "Shifts the pos1 and pos2 locations of the selected area.",
  "\\\\offset" = "Offsets the pos1 and pos2 locations of the selected area.",
  "\\\\generate" = "Generates a 3d shape according to a formula in the selected area, in [-sr] the s modifier will prevent the math equation parser from replacing single equal signs with double equal signs and the r modifier will prevent that as well as any other modifications so that it is run as pure javascript, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, x: center relative x, y: center relative y, z: center relative z, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.",
  "\\\\generatef" = "Generates a 3d shape according to a formula in the selected area, this one does not allow access to custom variables which will prevent being able to run scripts using this, this one is much more limited than \\\\generate so it is only recommended if you are restricting the \\\\generate command from a player to prevent script execution, in [-sr] the s modifier will prevent the math equation parser from replacing single equal signs with double equal signs and the r modifier will prevent that as well as any other modifications so that it is run as pure javascript, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, x: center relative x, y: center relative y, z: center relative z, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.",
  "\\\\generatejs" = "Generates a 3d shape according to the outputs of a JavaScript function in the selected area.",
  "\\\\generatecallback" = "Executes the specified callback JavaScript function for each block in the selected area.",
  "\\\\generates" = "Generates a 3d shape with the specified step according to a formula in the selected area, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, x: center relative x, y: center relative y, z: center relative z, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.",
  "\\\\generate2d" = "Generates a 2d shape according to a formula in the selected area, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, cx: center relative x, cy: center relative y, cz: center relative z, x: center and axis relative x, y: center and axis relative y, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.",
  "\\\\generates2d" = "Generates a 2d shape with the specified step according to a formula in the selected area, the formula can utilize the following variables: wx: world x, wy: world y, wz: world z, cx: center relative x, cy: center relative y, cz: center relative z, x: center and axis relative x, y: center and axis relative y, ax: pos1 x, ay: pos1 y, az: pos1 z, bx: pos2 x, by: pos2 y, bz: pos2 z, nx: negative corner x, ny: negative corner y, nz: negative corner z, px: positive corner x, py: positive corner y, pz: positive corner z.",
  "\\\\stack" = "Stacks the specified number of copies of the step area on top of the selected area.",
  "\\\\selectmode" = "Sets the selection mode for the item you are holding, this is used to pick where to set pos1/pos2 to if the held item is a selection tool, or if the \\brush command was used to make the held item into a custom brush then it will be used to determine what block the brush will target.",
  "\\\\itfill" = "Fills all or parts of the selected area with a specific block, with no limits, also temporarily spawns a tickingarea to load in chunks around it, can use any block type including NBT Editor only ones. This command CAN NOT be undone with \\\\undo.",
  "\\\\idtfill" = "Fills all or parts of the selected area with a specific block, with no limits, also temporarily spawns a tickingarea to load in chunks around it, also allows specifying the integrity of the fill, can use any block type including NBT Editor only ones. This command CAN NOT be undone with \\\\undo.",
  "\\\\replace" = "Replaces the blocks between the selected area with the selected block type.",
  "\\\\hreplace" = "Replaces the sides of the selected area with the selected block type. It just does a hollow fill. It is the same as \\\\replace except that the middle blocks are unaffected.",
  "\\\\walls" = "Replaces the walls of the selected area with the selected block type.",
  "\\\\ceil" = "Replaces the ceiling of the selected area with the selected block type.",
  "\\\\floor" = "Replaces the floor of the selected area with the selected block type.",
  "\\\\loadchunks" = "Loads the chunks in the selected area.",
  "\\\\set" = "Sets the blocks between the selected area to the selected block type.",
  "\\\\seti" = "Sets the blocks between the selected area to the selected block type with the specified integrity.",
  "\\\\drain" = "Drains the blocks between the selected area.",
  "\\\\flood" = "Floods the blocks between the selected area.",
  "\\\\remove" = "Remove the blocks in the selected area.",
  "\\\\sphere" = "Generates a sphere in the selected area.",
  "\\\\hsphere" = "Generates a hollow sphere in the selected area.",
  "\\\\stsphere" = "Generates a sphere in the selected area that is stretched to fill the area. It basically generates an ovoid.",
  "\\\\cone" = "Generates a cone in the selected area.",
  "\\\\cyl" = "Generates a cylinder in the selected area.",
  "\\\\tube" = "Generates a tube in the selected area.",
  "\\\\hcube" = "Generates a hollow cube in the selected area.",
  "\\\\maze" = "Generates a maze in the selected area.",
  "\\\\regenerateblocks" = "Regenerates blocks in the selected area based on the surrounding blocks.",
  "disconnect" = "Disconnects the specified players with an unexpected packet type error without saying that they left the game in the chat. So, it basically lets you silent disconnect players.",
  "morph" = "Morphs into the morph with the specified morph ID.",
  "scale" = "Sets the scale of the player, the default is 1.0. The visual scale scales the rendering and hitbox of the player by a certain amount, this can be combined with the visual scale. Note: To use this command the player must first have a scale component, to add this to the player you must run one of the andexsa:scale_#x commands on the player. Ex. /event entity @s andexsa:scale_1x",
  "tint" = "Tints the players skins a specified color, and optionally sets the alpha channel of their skins. The r, g, and b parameters are the color to tint it. The a parameter is the alpha channel. For the r, g, b, and a parameters, 1 is 0% brightness, 2 is 100% brightness, and anything higher than new makes the skins glow a certain amount. To enable the alpha channel you must set the useSpectatorMaterial parameter to 1, 0 is the default player material, 1 is the player material for players who are in spectator mode, 0 does not allow for an alpha channel, but 1 does allow for an alpha channel.",
  "tps" = "Gets the current TPS values and displays them in the chat to you only.",
  "visualscale" = "Sets the visual scale of the player, the default is 0.9375. The visual scale scales the rendering of the player by a certain amount without changing the hitbox, this can be combined with the regular scale.",
  "visualscaleenabled" = "Enables or disables the visual scale override set in the \\visualscale command.",
}

readdirSync(import.meta.dirname).forEach((file: string): void => {
  if (file.endsWith(".md")) {
    const fileContents: string = readFileSync(path.join(import.meta.dirname, file), "utf-8");
    if (
      fileContents &&
      !fileContents.endsWith(`<!-- AUTO GENERATED -->
`)
    )
      return;
    rmSync(path.join(import.meta.dirname, file));
  }
});

for (const command of commands) {
  const filePath: string = path.join(
    import.meta.dirname,
    `./${command.commandName.startsWith("\\") ? command.commandName.replace(/^\\{1,2}/, "--") : "-" + command.commandName}.md`
  );
  if (
    !existsSync(filePath) ||
    readFileSync(filePath, "utf-8").endsWith(`<!-- AUTO GENERATED -->
`)
  ) {
    console.log("N___", command.commandName, filePath);
    const commandName: string = (
      command.commandName.startsWith("\\")
        ? command.commandName.replace(/^\\{1,2}/, "\\\\")
        : "\\" + command.commandName
    ).replaceAll("\\", "\\\\");
    writeFileSync(
      filePath,
      `---
title: ${commandName.replaceAll("\\\\", "\\")}
page_title: ${commandName.replaceAll("\\\\", "\\")}
description: The ${commandName.replaceAll("\\\\", "\\")} command.
show_outline: false${
        // command.commandName.startsWith("\\")
        (Array.isArray(command.category) ? command.category : [command.category]).includes(
          "worldedit"
        )
          ? `
category: WorldEdit
nav_order: 3`
          : `
category: Main`
      }
mentions:
    - Andexter8${
      !command.functional
        ? `
tags:
    - command_nonfunctional`
        : ""
    }
---${
        command.command_version === "0.0.0"
          ? `

<template-Planned />`
          : ""
      }

<template-Stub />

<template-EmptySection />${
        commanddescriptions[
          command.commandName.replace(/^\\{1,2}/, "\\\\") as keyof typeof commanddescriptions
        ]
          ? `

${commanddescriptions[command.commandName.replace(/^\\{1,2}/, "\\\\") as keyof typeof commanddescriptions]}`
          : ""
      }

<CommandDetailsTable
    name="${commandName.replaceAll("\\\\", "\\")}"${
      command.aliases
        ? `
    :aliases="[
        ${command.aliases
          .map(
            (v): string =>
              `'${JSON.stringify(
                v.commandName.startsWith("\\")
                  ? v.commandName.replace(/^\\{1,2}/, "\\\\")
                  : "\\" + v.commandName
              ).slice(1, -1)}'`
          )
          .join(", ")}
    ]"`
        : ""
    }${
      command.category
        ? `
    :categories="[
        ${(Array.isArray(command.category) ? command.category! : [command.category]).map((v: string): string => `'${v}'`).join(", ")}
    ]"`
        : ""
    }
    :requiredTags="[
        ${command.requiredTags.map((v: string): string => `'${JSON.stringify(v).slice(1, -1)}'`).join(", ")}
    ]"
    ultraSecurityModeSecurityLevel=${JSON.stringify(command.ultraSecurityModeSecurityLevel)}
    version="${command.command_version}"
    :undoSupported="${command.undoSupported ?? -1}"
    :functional="${command.functional}"
    :deprecated="${command.deprecated}"
/>

## Syntax

<template-EmptySection />

## Result

<template-EmptySection />

## History

<template-EmptySection />

<!-- AUTO GENERATED -->
`
    );
  } else {
    console.log("Y___", command.commandName);
  }
}
