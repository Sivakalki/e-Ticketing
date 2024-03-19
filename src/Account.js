import './Account.css';
export default function Account(){
    return(
    <form action="#" method="post">
      <h2>My Details</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" defaultValue="John Doe" required />
      
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" defaultValue="30" required />
      
      <label htmlFor="mobile">Mobile:</label>
      <input type="tel" id="mobile" name="mobile" defaultValue="123-456-7890" required />
      
      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" name="email" defaultValue="john@example.com" required />
      
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" defaultValue="password123" required />
      
      <input type="submit" value="Save" />
    </form>
    );
}

