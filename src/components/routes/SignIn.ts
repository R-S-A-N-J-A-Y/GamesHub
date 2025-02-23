interface Props{
  user : {
    name: string,
    email: string,
    password: string
  }
  mode: string;
}

export const signIn = async ( { user, mode }: Props  ) => {
  return fetch( mode === "admin" ? "http://localhost:3000/admin/signin" : "http://localhost:3000/user/signin", {
    method : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
  })
    .then( () => true ) 
    .catch(() => false)
}