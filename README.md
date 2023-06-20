# Dynamic JavaScript Menu

This project is a simple and reusable JavaScript module for creating dynamic menus on a web page. It's highly configurable and easy to integrate into your existing web projects.

## Features

- Dynamically creates a menu based on passed configuration object.
- Supports nested submenus.
- Provides click handlers for each menu item.
- Allows you to set custom names for the 'Close' and 'Show Menu' buttons.
- Menu's title and subtitle can be customized.

## Usage

To use this menu in your project, follow these steps:

1. Include the `menu.js` and `menu.css` files in your project.

2. Create a configuration object for your menu. The configuration object should have the following properties:

   - `menuData`: an array of objects, each representing a menu item. Each menu item should have a `label` property and an `onClick` function. If a menu item has a submenu, it should also have a `submenu` property that is an array of submenu items.

   - `title`: a string representing the title of the menu. This is optional.

   - `subtitle`: a string representing the subtitle of the menu. This is optional.

   - `buttonNames`: an object with properties `close` and `show` specifying the text for the close button in the menu and the show menu button, respectively. If you don't specify `buttonNames`, the default values 'Close' for the close button and 'Show Menu' for the show menu button will be used. This is optional.

3. Instantiate a new `Menu` object using your configuration object:

```javascript
const menuConfig = {
  menuData: [
    // your menu items here
  ],
  title: 'Your Menu Title',
  subtitle: 'Your Menu Subtitle',
  buttonNames: { close: 'Your Close Text', show: 'Your Show Text' }
};

const menu = new Menu(menuConfig);
```

4. Call the `createMenu()` method on your `Menu` object to create the menu.

5. Add a button to your page that calls the `toggle()` method on your `Menu` object to show or hide the menu.

That's it! You now have a dynamic JavaScript menu in your project.
