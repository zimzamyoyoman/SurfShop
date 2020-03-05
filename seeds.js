const faker = require('faker');
const Post = require('./models/post');

async function seedPosts() {
    await Post.remove({});
    for (const i of new Array(40)) {
        const post = {
            title: faker.lorem.word(),
            description: faker.lorem.text(),
            coordinates: [-120, 71],
            author: {
                '_id': '5e554a5ef9ba3601dcd0f7db',
                'username': 'sam'
            }
        }
        await Post.create(post);
    }
    console.log('40 new posts created');
}

module.exports = seedPosts;