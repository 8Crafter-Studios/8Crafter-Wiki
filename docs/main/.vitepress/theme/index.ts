// https://vitepress.dev/guide/custom-theme
import "./styles/index.scss";
import { Theme } from "vitepress";
import { Component } from "vue";

import Layout from "./components/Layout.vue";

import Button from "./components/content/Button.vue";
import Card from "./components/content/Card.vue";
import CardGrid from "./components/content/CardGrid.vue";
import CodeHeader from "./components/content/CodeHeader.vue";
import CommandDetailsTable from "./components/content/CommandDetailsTable.vue";
import FolderView from "./components/content/FolderView.vue";
import Label from "./components/content/Label.vue";
import MolangGraph from "./components/content/MolangGraph.vue";
import Spoiler from "./components/content/Spoiler.vue";
import Tag from "./components/content/Tag.vue";
import WikiImage from "./components/content/WikiImage.vue";
import YouTubeEmbed from "./components/content/YouTubeEmbed.vue";
import template_AddonDependency from "./components/content/template-Add-OnDependency.vue";
import template_Deprecated from "./components/content/template-Deprecated.vue";
import template_EmptySection from "./components/content/template-EmptySection.vue";
import template_ExpandSection from "./components/content/template-ExpandSection.vue";
import template_Experimental from "./components/content/template-Experimental.vue";
import template_IncompleteSection from "./components/content/template-IncompleteSection.vue";
import template_InDevelopment from "./components/content/template-InDevelopment.vue";
import template_MissingInformation from "./components/content/template-MissingInformation.vue";
import template_MoreImages from "./components/content/template-MoreImages.vue";
import template_NeedsRender from "./components/content/template-NeedsRender.vue";
import template_OutdatedFeature from "./components/content/template-OutdatedFeature.vue";
import template_Planned from "./components/content/template-Planned.vue";
import template_Scrapped from "./components/content/template-Scrapped.vue";
import template_Shelved from "./components/content/template-Shelved.vue";
import template_Stub from "./components/content/template-Stub.vue";
import template_TooTechnical from "./components/content/template-TooTechnical.vue";
import template_Update from "./components/content/template-Update.vue";
import template_WorkInProgress from "./components/content/template-WorkInProgress.vue";
import msgbox from "./components/content/msgbox.vue";

const contentComponents: Record<string, Component> = {
  Button,
  Card,
  CardGrid,
  CodeHeader,
  CommandDetailsTable,
  FolderView,
  Label,
  MolangGraph,
  Spoiler,
  Tag,
  WikiImage,
  YouTubeEmbed,
  "template-Add-OnDependency": template_AddonDependency,
  "template-Deprecated": template_Deprecated,
  "template-EmptySection": template_EmptySection,
  "template-ExpandSection": template_ExpandSection,
  "template-Experimental": template_Experimental,
  "template-IncompleteSection": template_IncompleteSection,
  "template-InDevelopment": template_InDevelopment,
  "template-MissingInformation": template_MissingInformation,
  "template-MoreImages": template_MoreImages,
  "template-NeedsRender": template_NeedsRender,
  "template-OutdatedFeature": template_OutdatedFeature,
  "template-Planned": template_Planned,
  "template-Scrapped": template_Scrapped,
  "template-Shelved": template_Shelved,
  "template-Stub": template_Stub,
  "template-TooTechnical": template_TooTechnical,
  "template-Update": template_Update,
  "template-WorkInProgress": template_WorkInProgress,
  msgbox,
};

export default {
  Layout,
  enhanceApp({ app }) {
    for (const name in contentComponents) {
      app.component(name, contentComponents[name]);
    }
  },
} satisfies Theme;

export * from "./types";
