import { Event } from "./models/Event"
import { GithubUser } from "./models/GithubUser"
import { Repo } from "./models/Repo"

export async function getGithubUser(user: string): Promise<GithubUser> {
  const response = await fetch(`https://api.github.com/users/${user}`)
  const data = await response.json() as GithubUser
  return data
}

export async function getUserRepos(user: string) {
  const response = await fetch(`https://api.github.com/users/${user}/repos`)
  const data = await response.json()
  data.forEach((repo: any) => {
    delete repo.id
    delete repo.node_id
    delete repo.private
    delete repo.owner
    delete repo.forks_url
    delete repo.keys_url
    delete repo.keys_url
    delete repo.collaborators_url
    delete repo.teams_url
    delete repo.hooks_url
    delete repo.issue_events_url
    delete repo.events_url
    delete repo.events_url
    delete repo.assignees_url
    delete repo.branches_url
    delete repo.tags_url
    delete repo.blobs_url
    delete repo.git_tags_url
    delete repo.git_refs_url
    delete repo.trees_url
    delete repo.statuses_url
    delete repo.languages_url
    delete repo.stargazers_url
    delete repo.contributors_url
    delete repo.subscribers_url
    delete repo.subscription_url
    delete repo.commits_url
    delete repo.git_commits_url
    delete repo.comments_url
    delete repo.issue_comment_url
    delete repo.contents_url
    delete repo.compare_url
    delete repo.merges_url
    delete repo.archive_url
    delete repo.downloads_url
    delete repo.issues_url
    delete repo.pulls_url
    delete repo.milestones_url
    delete repo.notifications_url
    delete repo.labels_url
    delete repo.releases_url
    delete repo.deployments_url
    delete repo.ssh_url
    delete repo.svn_url
    delete repo.has_issues
    delete repo.has_projects
    delete repo.has_downloads
    delete repo.has_wiki
    delete repo.has_pages
    delete repo.has_discussions
    delete repo.archived
    delete repo.disabled
    delete repo.web_commit_signoff_required
  })

  return data as Array<Repo>
}

export async function getUserEvents(user: string) {
  const max_events = 10
  const response = await fetch(`https://api.github.com/users/${user}/events`)
  const data = await response.json()
  const events = data.slice(0, data.length > max_events ? max_events : data.length)
  events.forEach((event: any) => {
    delete event.id
    delete event.actor
    event.repo = event.repo.name
    if (event.type == "PushEvent") {
      event.payload = { commits: event.payload.commits.map((commit: any) => commit.message).toString() }
    } else if (event.type == "PullRequestEvent") {
      event.payload = { pull_request: event.payload.pull_request.title + " -- " + event.payload.pull_request.body }
    } else if (event.type == "PullRequestReviewEvent") {
      event.payload = { review: event.payload.review.body }
    } else {
      event.payload = {}
    }
  });

  console.log(events)

  return events as Array<Event>
}
