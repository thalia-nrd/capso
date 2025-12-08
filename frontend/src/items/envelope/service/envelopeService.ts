const API_URL = process.env.REACT_APP_API_URL || "";

async function request<T>(endpoint: string, data?: any, method: string = "GET"): Promise<T> {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method,
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            ...(method !== "GET" && data ? { body: JSON.stringify(data) } : {})
        });
        if (!response.ok) {
            let errorMessage = "Request failed";
            try {
                const errorBody = await response.json();
                if (errorBody?.message) errorMessage = errorBody.message;
            } catch {}
            throw new Error(errorMessage);
        }
        return await response.json();
    } catch (err: any) {
        if (err instanceof TypeError && err.message.includes("Failed to fetch")) {
            throw new Error("Cannot reach server. Please try again later.");
        }
        throw err;
    }
}

export const getJournalEntries = (frameId: string) => {
    return request<{ id: number; content: string; createdAt: string; updatedAt: string; frameId: number }[]>(
        `/frame/${frameId}/journal`,
    );
}

export const createEntry = (frameId: string, content: string) => {
    return request<{ id: number; content: string; createdAt: string; updatedAt: string; frameId: number }>(
        `/frame/${frameId}/journal`,
        { content },
        "POST"
    );
}

export const updateJournal = (frameId: string, journalId: string, content: string) => {
    return request<{ id: number; content: string; createdAt: string; updatedAt: string; frameId: number, journalId: number }>(
        `/frame/${frameId}/journal/${journalId}`,
        { content },
        "PUT"
    );
}