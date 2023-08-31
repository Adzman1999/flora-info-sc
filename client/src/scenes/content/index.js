import React from "react";
import TabPanel from "../../components/TabPanel";
import FloraInfoView from "./flora_info/add_flora_info/FloraInfoView";
import ArchiveRecord from "./flora_info/archive/ArchiveRecord";
import QueryView from "./flora_info/query/QueryView";

const FloraInfoContent = ({ value }) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        <FloraInfoView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QueryView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ArchiveRecord/>
      </TabPanel>
    </>
  );
};

export default FloraInfoContent;
