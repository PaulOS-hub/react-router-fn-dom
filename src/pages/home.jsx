import { renderRoutes } from "../router/renderRoute";
export default function Home(props) {
  return (
    <div>
      我是home ---------------
      {renderRoutes(props.routes || [])}
    </div>
  );
}
