insert into posts  (title, body, user_id)
select 'Admin announcement', 'This API is awesome!', id
FROM users
where username = 'admin';

insert into posts   (title, body, user_id)
select 'Just a test', 'This is just a test. I repeat, this is just a test', users.id
from users
where username = 'admin';
-- how do i refer to the admin number, do i have to join to the customer table?

-- select id from user
-- where user = 'admin'
