export interface Submission {
  id: string;
  name: string;
  phone: string;
  industry: string;
  message: string;
  createdAt: string;
}

const DB_KEY = 'youdeal_db_submissions';

export const db = {
  /**
   * Insert a new record into the database
   */
  async insert(data: Omit<Submission, 'id' | 'createdAt'>): Promise<Submission> {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 600));

    const newRecord: Submission = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data
    };

    try {
      const existingData = localStorage.getItem(DB_KEY);
      const records: Submission[] = existingData ? JSON.parse(existingData) : [];
      records.unshift(newRecord); // Add to top
      localStorage.setItem(DB_KEY, JSON.stringify(records));
      return newRecord;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to save to database');
    }
  },

  /**
   * Retrieve all records
   */
  async getAll(): Promise<Submission[]> {
     const existingData = localStorage.getItem(DB_KEY);
     return existingData ? JSON.parse(existingData) : [];
  },

  /**
   * Clear all records (for admin)
   */
  async clear(): Promise<void> {
    localStorage.removeItem(DB_KEY);
  }
};