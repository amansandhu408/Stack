import conf from "../conf/conf";
import { Client, Account, ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async  createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                // call another method (jo bhi man ho like ki success msg/ seedha signin)
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;            
        } 
        return null; // maan lo agar try me error aaya ki account toh hai hi nahi , uske liye return null
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appewrite service :: logout :: error : ", error);
        }
    }
}

const authService = new AuthService();

export default authService