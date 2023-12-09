const exportData = {
  "Web Storage(local or session storage)": webStorage,
  IndexedDB: indexedDB,
  "File system Access api": "",
  "File and Directory Entries API": "",
  "Web Sql": "",
  Cookies: "",
};
const webStorage = () => `
# Introduction
 Web storage is used to storage the data in the form of key value pair
  * local storage 
   - As name suggest all your data is present as a local copy into browser when the browser is closed and even computer is restarted
  * session storage
   - As name suggest session data will retain for the session. It will be closed when the user closes tab if tab is open again data is not avalable.

# Method Involved
   .setItem(key,value) // set the value
   .getItem(key) // get the value
   .removeItem(key) // delete the value
   .clear() // clear all the data present in local storage

# Key points
  Data type   : string
  Speed       : slow
  Size        : 5 MB
  persistence : session/browser history
  Key feature : Good browser support
`;
const indexedDB = () => `
# Key points
  Data type   : any
  Speed       : fast
  Size        : 1gb or 60% of disk space
  persistence : data remain until cleared
  Key feature : hige data storage
`;
export default exportData;
