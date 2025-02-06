<script setup lang="tsx">
const props = defineProps<{
  section?: string;
  dependencies: [name: string, minimumVersion?: string][];
}>();
const dependencyNameMap = {
  andexsa: "8Crafter's Entity Scale, NBT, and Behavior Modifier, Bossbar, and Morph Addon",
  andexdb:
    "8Crafter's Debug Sticks, Chat Ranks, Custom UI, and JavaScript Commands/Script REPL and Server Utilities",
  bluemods: "BlueMods AntiCheat",
};
</script>
<template>
  <msgbox
    :mini="props.section != undefined ? '' : undefined"
    :title="
      'This ' +
      (props.section ?? 'page') +
      ' describes a feature that requires another add-on to work.'
    "
    :text="
      props.dependencies.length == 1
        ? 'This feature requires the following add-on as a dependency: ' +
          (props.dependencies[0][0] in dependencyNameMap
            ? dependencyNameMap[props.dependencies[0][0]]
            : props.dependencies[0][0]) +
          (props.dependencies[0][1] != undefined ? ' ' + props.dependencies[0][1] + '+' : '')
        : 'This feature requires the following add-ons as dependencies: ' +
          JSON.stringify(
            props.dependencies.map(
              (v) =>
                (v[0] in dependencyNameMap ? dependencyNameMap[v[0]] : v[0]) +
                (v[1] != undefined ? v[1] + '+' : '')
            ),
            undefined,
            4
          )
    "
    image="/assets/images/icons/Add-Ons_Side-Nav_Icon_24x24.png"
    class="msgbox-blue"
  />
</template>
