const Contact = () => {
    return (
        <div>
            <form>
                <label for="name">Your Name:</label><br />
                <input type="text" id="name" name="name" /><br />
                <label for="email">Your E-Mail Address:</label><br />
                <input type="text" id="email" name="email" /><br />
                Message:<br />
                <textarea name="message" rows="5" cols="25" /><br />
                <button type="submit" onclick="Submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;