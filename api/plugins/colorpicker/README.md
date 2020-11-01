# Strapi plugin Color Picker

Uses the [React Color](https://casesandberg.github.io/react-color/) package.

The color picker field cannot yet be selected through the Content-Types Builder UI.

It needs to be directly enabled in the desired collection type model as described [here](https://github.com/strapi/strapi/discussions/6351#discussioncomment-19977).

**Ex:**

```js
"attributes": {
  "color": {
    "type": "colorpicker",
    "columnType": "longtext"
  },
}
```
