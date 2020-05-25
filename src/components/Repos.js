import React, { useState, useEffect } from "react"
import Repo from "./Repo"

const Repos = () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState([])

  useEffect(() => {
    const data = sessionStorage.getItem("repos")
    let myRepos

    if (data) {
      myRepos = JSON.parse(data)

      setReposCount(myRepos.length)

      myRepos = myRepos.slice(1, 13)
      return setRepos(myRepos)
    }

    async function fetchRespos() {
      const response = await fetch(
        "https://api.github.com/users/4rturd13/repos"
      )
      myRepos = await response.json()
      setReposCount(myRepos.length)

      sessionStorage.setItem("repos", JSON.stringify(myRepos))
      myRepos = myRepos.slice(1, 13)
      setRepos(myRepos)
    }

    fetchRespos()
  }, [])
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <header className="text-center">
        <h2>My work on Open Source</h2>
        <p className="">Code colaboration</p>
      </header>
      <ul className="repos-list">
        {repos.map(repo => {
          return <Repo repo={repo} key={repo.id} />
        })}
      </ul>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/4rturd13"
          className="btn"
          target="_blank"
          rel="noopener nooreferrer"
        >
          Ver mas en GitHub ({reposCount})
        </a>
      </div>
    </div>
  )
}

export default Repos
