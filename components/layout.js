import Sidebar from "/components/sidebar";
import useWindowSize from "/hooks/resize";

const Layout = ({ children }) => {
  const size = useWindowSize();
  return (
    <div className={size.width > 767 ? 'layout' : 'container' }>
      <Sidebar size={size} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
