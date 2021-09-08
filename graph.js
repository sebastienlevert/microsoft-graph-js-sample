// Create an authentication provider
const authProvider = {
    getAccessToken: async () => {
        // Call getToken in auth.js
        return await getToken();
    }
};
// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });
//Get user info from Graph
async function getUser() {
    ensureScope('user.read');
    return await graphClient
        .api('/me')
        .select('id,displayName')
        .get();
}

async function getUserPhoto() {
    ensureScope('user.read'); 
    return await graphClient  
        .api('/me/photo/$value')  
        .get(); 
 }

async function getUserDirectReports() {
    ensureScope('user.read.all');
    return await graphClient
        .api('/me/directReports')
        .select('id,displayName')
        .get();
}

async function getUserFiles() {
    ensureScope('files.read');
    return await graphClient
        .api('/me/drive/root/children')
        .select('name,webUrl')
        .get();
}