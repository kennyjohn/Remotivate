import { login, logout } from '../../actions/auth';

test('should set up login action object', () => {
    const action = login('someUserId');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'someUserId'
    });
});

test('should set up logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});