module.exports = async ({github, context }) => {
    const issues = await github.rest.issues.listForRepo({
        owner: context.repo.owner,
        repo: context.repo.repo,
        labels: ['bug'],
        assignee: '*'
    });

    const data = issues.data.map(issue => `${issue.html_url} @${issue.assignee.login}`).join('\n')
    // console.log(data)
    return data
}