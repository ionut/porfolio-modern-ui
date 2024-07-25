import React from 'react'
import { format } from "date-fns";
import { fetchGitHubRepos } from '@/data/getGithubProfileDetails';

export const revalidate = 3600

const GitHubActivityTable = async () => {
    const res = await fetchGitHubRepos();

    return (
        <div>
            <h1 className="text-center prose-2xl mb-2">My GitHub Activity</h1>
            <div className="overflow-x-auto">
                <table className="table table-sm table-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="prose-lg">Owner</th>
                            <th className="prose-lg">Repository Name</th>
                            <th className="prose-lg">Repository URL</th>
                            <th className="prose-lg">Repository Homepage</th>
                            <th className="prose-lg">Last Update</th>
                            <th className="prose-lg">Main Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!Array.isArray(res)
                            ?
                            <p className="prose-xl">{res}</p>
                            :
                            res.map((item, index) => {
                                const { id, name, html_url, homepage, updated_at, language } = item;
                                const formatedUpdatedDate = format(new Date(updated_at), "MM/dd/yyyy");

                                return (
                                    <tr key={id}>
                                        <th className="prose-base">{index + 1}</th>
                                        <th className="prose-base">{item.owner.login}</th>
                                        <th className="prose-base">{name}</th>
                                        <th className="prose-base"> <a href={html_url} target="_blank">{html_url}</a></th>
                                        <th className="prose-base">{homepage ? <a href={homepage} target="_blank">{homepage}</a> : "No preview"}</th>
                                        <th className="prose-base">{formatedUpdatedDate}</th>
                                        <th className="prose-base">{language}</th>
                                    </tr>
                                )
                            })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th className="prose-lg">Owner</th>
                            <th className="prose-lg">Repository Name</th>
                            <th className="prose-lg">Repository URL</th>
                            <th className="prose-lg">Repository Homepage</th>
                            <th className="prose-lg">Last Update</th>
                            <th className="prose-lg">Main Language</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default GitHubActivityTable