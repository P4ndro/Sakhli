import bcrypt from 'bcrypt';


export const register = async (req, res) => {
    const { username, email, password } = req.body;
    
    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    // CREATE USER AND SAVE TO DATABASE
    
    res.status(201).json({ message: "User created successfully!" });
}
export const  login= (req, res) => {

}
export const logout = (req, res) => {

}