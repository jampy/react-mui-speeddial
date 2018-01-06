import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Add from 'material-ui-icons/Add';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Close from 'material-ui-icons/Close';
// import { SpeedDial, SpeedDialItem } from '../src/index';
import MyButton from '../src/some';
/*storiesOf('Button', module)
  .add('with text', () => (
    <SpeedDial
      fabContentOpen={<Add />}
      fabContentClose={<Close />}
    >
      <SpeedDialItem
        label="Add to collection"
        fabContent={<PlaylistAdd />}
        onTouchTap={addToCollection}
      />
      <SpeedDialItem
        label="Add to wishlist"
        fabContent={<NoteAdd />}
        onTouchTap={addToWishlist}
      />
    </SpeedDial>
  ));*/

  storiesOf('Button', module)
    .add('with text',() => (
      <MyButton />
    ))
