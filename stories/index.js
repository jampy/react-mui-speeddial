import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Add from 'material-ui-icons/Add';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import NoteAdd from 'material-ui-icons/NoteAdd';
import Close from 'material-ui-icons/Close';
import { SpeedDial, SpeedDialItem } from '../src/index';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const addMethod1 = () => {
    console.log('Option 1 clicked');
  }

const addMethod2 = () => {
    console.log('Option 2 clicked');
  }
const styles = { height: '400px', padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' };
const Container = ({ children }) => (<div style={styles}><div>{children}</div></div>);
storiesOf('Button', module)
  .add('with text', () => (<Container>
    <SpeedDial
      fabContentOpen={<Add />}
      fabContentClose={<Close />}
    >
      <SpeedDialItem
        label="Add 1"
        fabContent={<PlaylistAdd />}
        onTouchTap={addMethod1}
      />
      <SpeedDialItem
        label="Add 2"
        fabContent={<NoteAdd />}
        onTouchTap={addMethod2}
      />
    </SpeedDial></Container>
  ));
