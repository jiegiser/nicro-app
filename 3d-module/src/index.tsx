import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'cesium/Widgets/widgets.css'
import 'smart3d/dist/smart3d/smart3d.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';

function render(props: any) {
  const { container } = props
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}


if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}
export async function bootstrap() {
  console.log('[react17] react app bootstraped');
}
export async function mount(props: any) {
  console.log('[react17] props from main framework', props);
  render(props);
}
export async function unmount(props: any) {
  console.log('unmount')
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
