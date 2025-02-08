export default class Connectors{

    private connectorList:Array<any> = [];


    public constructor(){
        const arr = [
            {
            logo: 'https://rapidapi-prod-fe-static.s3.amazonaws.com/theming/light.png',
            name: 'Rapi API',
            desc: "## Best Public APIs for Testing (2022) Browse RapidAPI's list of the Top Free APIs. These APIs are open to the public and are free to use (or have a freemium model). This is the perfect place for developers to browse [APIs for testing](https://rapidapi.com/blog/api-testing/). You'll find tons"

            },
            {
                logo: 'https://clickup.com/assets/brand/logo-v3-clickup-light.svg',
                name: 'Click up',
                desc: 'Get your teams working together more closely, even if they’re far apart. Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs'
            },
            {
                logo: 'https://wac-cdn.atlassian.com/misc-assets/adg4-nav/AtlassianHeaderLogo.svg',
                name: 'Atlassian',
                desc: 'The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.'
            },
            {
                logo: 'https://assets.dummyjson.com/public/img/icons/home.svg',
                name: 'DummyJSON ',
                desc: 'DummyJSON can be used with any type of front end project that needs products, carts, users, todos or any dummy data in JSON format. You can use examples below to check how DummyJSON works'
            },
            {
                logo:'https://fakestoreapi.com/icons/logo.png',
                name:'fakeStoreApi',
                desc: 'fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!'
            }
        ];

        this.connectorList = arr;
    }

    public getConnectors(){
        return this.connectorList;
    }
}