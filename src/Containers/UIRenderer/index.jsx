import Header from '../../Components/Header';
import ContentRenderer from './ContentRenderer';

const RENDER_HEADER_COMPONENT = () => <Header />;

const DISPLAY_SCREEN_CONTENT = () => <ContentRenderer />;

const UIRenderer = () => {
  console.log('Called UI Renderer');

  return (
    <div id="ui-renderer">
      <RENDER_HEADER_COMPONENT />   
      <DISPLAY_SCREEN_CONTENT />
    </div>
  );
};

export default UIRenderer;
