# Auth User Data

Get the Authorized user's state from any Component simply by using `HOC` or `Hooks`

- To get the Authorized user's state from _Higher Order Components_, use `withAuth`
- To get the Authorized user's state using _React Hooks_, use `useAuth`

## Using Hooks

```js
import {useAuth} from 'react-auth-kit'
```

### Demo
```jsx
import React from 'react'
import {useAuth} from 'react-auth-kit'

const SomeComponent = () => {
    const auth = useAuth()
    
    return(
        <div>
            Hello {auth.user}
        </div>
    )
}
```

## Using Higher Order Component

```jsx
import {withAuth} from 'react-auth-kit'
```

### Demo
```jsx
import React from 'react'
import {withAuth} from 'react-auth-kit'

class SomeComponent extends React.Component {
    render(){
        return (
            <div>
                Hello {this.props.authState.user}
            </div>
        )
    }
}

export default withAuth(SomeComponent)
```

<p align="center">&mdash; 🔑  &mdash;</p>
<p align="center"><i>React Auth Kit is <a href="https://github.com/react-auth-kit/react-auth-kit/blob/master/LICENSE">Apache 2.0 License</a> code</i></p>