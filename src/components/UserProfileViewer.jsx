import React from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'

export default ({ id, name, age, history, match, logout }) => {
    return (
        <Card style={{ margin: 10 }}>
            <CardTitle>User Id: { id }</CardTitle>
            <CardText>
                Name: { name }
                <br />
                Age: { age }
            </CardText>
            <CardActions>
                <Button onClick={ () => history.push(`/profile/edit`) } label='Update Profile' />
                <Button onClick={ () => logout() } label='LogOut' />
            </CardActions>
        </Card>
    )
}