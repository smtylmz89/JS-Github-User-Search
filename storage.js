class Storage{
    static getSearchedUsersFromStorage(){
        let users;
        if(localStorage.getItem("searched")===null){
            users=[]
        }else{
            users=JSON.parse(localStorage.getItem("searched"));
        }
        return users;

        //tüm kullanıcıları al
    }
    static addSearchedUserToStorage(username){
        //kullanıcı ekle
        let users=this.getSearchedUsersFromStorage();
        //index of

        if(users.indexOf(username)===-1){
            users.push(username)
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){
        //tüm kullanıcıları sil
        localStorage.removeItem("searched");
    }
}