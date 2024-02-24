function Layout({ children }) {
  return (
    <div>
      <div class="max-h-screen flex ">
        {/* main content  */}
        <main class="flex-1 min-w-0 overflow-auto ...">
          <div className=" flex  justify-center">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
