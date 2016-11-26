# Speeddial (enhanced Floating Action button) for [Material-UI](https://github.com/callemall/material-ui)

A Speed dial according to the [Material Design guide](https://material.google.com/components/buttons-floating-action-button.html#buttons-floating-action-button-behavior). Scroll down to "Speed dial" 
for an introduction.

Additionally to the Google referencem this component adds optional labels 
beneath the action buttons.
 
## Usage

```jsx harmony
import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

// just some icons for illustration (example only):
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NewGameIcon from 'material-ui/svg-icons/av/playlist-add';
import NewPageIcon from 'material-ui/svg-icons/action/note-add';


render() {
  return (
    <SpeedDial
      fabContentOpen={
        <ContentAdd />
      }
      fabContentClose={
        <NavigationClose />
      }
    >
    
      <SpeedDialItem
        label="new game"
        fabContent={<NewGameIcon/>}
        onTouchTap={this.startNewGame}
      />
      
      <SpeedDialItem
        label="new page"
        fabContent={<NewPageIcon/>}
        onTouchTap={this.startNewPage}
      />

    </SpeedDial>
  );
 }

```

This shows a standard [Floating Action Button (FAB)](http://www.material-ui.com/#/components/floating-action-button)
with a `+` icon. Once clicked, two mini FABs appear above and the main FAB
transforms into a "close" icon.

## `<SpeedDial>` props

 - `open` = You can use this property to manually open/close the speed dials.
  If not specified, then the component will control itself automatically.
 - `effect` = The appear/disappear effect to use during open/close. Available
  options are: 
   - `none`
   - `fade-staggered` (default)
   - `fade`
   - `slide`
 - `fabProps` = props to pass to the internal `<FloatingActionButton>` 
  component. Use this to style the FAB, for example.
 - `fabContentOpen` = children for the FAB in the *closed* state. This is 
  usually an `<SvgIcon>` or `<FontIcon>` telling the user that clicking the 
  FAB will *open* additional choices.
 - `fabContentClose` = children for the FAB in the *opened* state. If not 
  specified, the value of `fabContentOpen` will be used instead.
 - `children` = the children of the `<SpeedDial>` component should be 
  `<SpeedDialItem>` instances (see below). 
  
## `<SpeedDialItem>` props

 - `fabContent` = usually a `<SvgIcon>` or `<FontIcon>` to specify the icon 
  to display in the mini-FAB.
 - `label` = an optional label to display on the left of the mini-FAB. This 
  can be a simple text or even other React components. The content is 
  vertically aligned to the FAB.
    
## License
This project is licensed under the terms of the
[MIT license](https://github.com/callemall/material-ui/blob/master/LICENSE)
