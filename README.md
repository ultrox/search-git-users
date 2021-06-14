## Auto complete for Github Users

Deployed with netlify and circleci!


## Staging & prod live on:

- [stagin-git-users](https://staging-git-users.netlify.com/)
- [prod-git-users](https://prod-git-users.netlify.com/)


## Project Analysis

- [figma](https://www.figma.com/file/SMrX6UR3bCZi0OBHNc2AFK/search-git-users?node-id=0%3A1) 

### Install


`git clone git@github.com:ultrox/search-git-users.git search-git-users`

`yarn install`

Generate personal token [github tokens](https://github.com/settings/tokens`)

Create env file:

`yarn run gen:env <YOUR_TOKEN>`

## Deployment on Netlify with CircleCI:


#### Create Netlify site ID

In project directory:

`nxp netlify init`

1. Create & configure a new site
2. Give it a name(this will be your subdomain on netlify). 
3. Chose your team
4. When asked about your Github informations, skip it `Ctrl-C`

If you did all steps correctly, you should have new directory 
`.netlify/state.json` which holds site-id.

If you want to setup production site, you should delete `.netlify` directory,
and do the song & dance again with different site name.

On the last note, you need to create `NETLIFY_ACCESS_TOKEN` [here](https://app.netlify.com/user/applications/personal)

