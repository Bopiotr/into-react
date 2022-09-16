import React from 'react';
import {Outlet} from "react-router-dom";
import PageFooter from "./componentes/PageFooter";
import PageHeader from "./componentes/PageHeader";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <div className='min-h-screen text-white-main flex items-center justify-between flex-col'>
        <PageHeader />
        <AnimatePresence>
            <Outlet />
        </AnimatePresence>
        <PageFooter />
    </div>
  );
}

export default App;
