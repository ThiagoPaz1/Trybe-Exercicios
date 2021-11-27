 const username = (req, res, next) => {
  const { username } = req.body;
  const usernameType = typeof username === 'string';
  
  if (!username || username.length <= 3 || !usernameType) {
    return res.status(400).json({ message: "invalid username" });
  } 
  
  next();
}

const email = (req, res, next) => {
  const { email } = req.body;
  const validEmail = /\S+@\S+\.\S+/.test(email);
  
  if (!validEmail || !(typeof email === 'string')) {
    return res.status(400).json({ message: "invalid email" });
  }
  
  next();
}

const password = (req, res, next) => {
  const { password } = req.body;
  const validateType =  typeof password === typeof 0;
  const passwordString = String(password);
  const passwordLength = passwordString.length;
  const limitPassword = passwordLength >= 4 && passwordLength <= 8;

  if (!password || !validateType || !limitPassword) {
    return res.status(400).json({ message: "invalid password" });
  }
  
  next();
}

module.exports = {
  username,
  email,
  password
}