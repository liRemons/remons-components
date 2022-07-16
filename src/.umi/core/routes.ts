// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'E:/job/project/remons-components/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('E:/job/project/remons-components/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('E:/job/project/remons-components/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/form-item",
        "component": require('E:/job/project/remons-components/src/FormItem/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/FormItem/index.md",
          "updatedTime": 1657952344172,
          "componentName": "FormItem",
          "slugs": [
            {
              "depth": 2,
              "value": "FormItem",
              "heading": "formitem"
            },
            {
              "depth": 5,
              "value": "默认提供了以下表单",
              "heading": "默认提供了以下表单"
            },
            {
              "depth": 5,
              "value": "使用方式示例",
              "heading": "使用方式示例"
            },
            {
              "depth": 5,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "FormItem",
          "hasPreviewer": true,
          "group": {
            "path": "/form-item",
            "title": "FormItem"
          }
        },
        "title": "FormItem - remons-componets"
      },
      {
        "path": "/",
        "component": require('E:/job/project/remons-components/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1657951489000,
          "slugs": [
            {
              "depth": 3,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 5,
              "value": "基本思想",
              "heading": "基本思想"
            },
            {
              "depth": 5,
              "value": "鸣谢",
              "heading": "鸣谢"
            }
          ],
          "title": "介绍"
        },
        "title": "介绍 - remons-componets"
      }
    ],
    "title": "remons-componets",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
