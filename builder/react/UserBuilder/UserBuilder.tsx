import React, {ReactElement} from "react";

interface UserProps {
    firstName?: string;
    lastName?: string;
    email?: string;
    avatarUrl?: string;
}

class UserBuilder {
    private readonly props: UserProps;

    constructor() {
        this.props = {};
    }

    withFirstName(firstName: string): UserBuilder {
        this.props.firstName = firstName;
        return this;
    }

    withLastName(lastName: string): UserBuilder {
        this.props.lastName = lastName;
        return this;
    }

    withEmail(email: string): UserBuilder {
        this.props.email = email;
        return this;
    }

    withAvatarUrl(avatarUrl: string): UserBuilder {
        this.props.avatarUrl = avatarUrl;
        return this;
    }

    build(): ReactElement {
        return <User {...this.props} />;
    }
}

function User(props: UserProps) {
    return (
        <div>
            {props.avatarUrl && <img src={props.avatarUrl} alt="Avatar" />}
            {props.firstName && <p>{props.firstName}</p>}
            {props.lastName && <p>{props.lastName}</p>}
            {props.email && <p>{props.email}</p>}
        </div>
    );
}

function App() {
    const user1 = new UserBuilder().withFirstName("John").withEmail("john@example.com").build();
    const user2 = new UserBuilder()
        .withFirstName("Jane")
        .withLastName("Doe")
        .withAvatarUrl("https://example.com/avatar.jpg")
        .build();

    return (
        <div>
            {user1}
            {user2}
        </div>
    );
}

export default App;
