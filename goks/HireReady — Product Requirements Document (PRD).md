# **HireReady — Product Requirements Document (PRD)**

## **1\. Product Overview**

**Product Name:** HireReady

**Bucket:** Impact & Innovation

**Target Users:** All job seekers — students, graduates, and working professionals.

**Product Purpose:**  
HireReady is an AI-powered career assistant that helps job seekers improve their applications by comparing their CV with a specific job description, identifying strengths and gaps, suggesting improvements, and helping them prepare for the application and interview.

---

## **2\. Problem**

Many job seekers use the same CV for different jobs without knowing whether their skills and experience match what the employer is looking for.

They may struggle to:

* Identify the skills employers are looking for  
* Recognize gaps in their CV  
* Know which parts of their CV need improvement  
* Present their experience effectively  
* Write a good cover letter  
* Prepare for job interviews

---

## **3\. Main User Journey**

The main journey is:

**Upload CV → Add Job Description → Analyze → Improve → Prepare → Apply**

The user should be able to complete this process without unnecessary steps.

---

# **4\. MVP Features**

## **Feature 1: Upload CV**

The user uploads their existing CV.

HireReady reviews information such as:

* Education  
* Work experience  
* Skills  
* Certifications  
* Projects  
* Achievements

The user should be able to review their CV information before continuing.

---

## **Feature 2: Add Job Description**

The user provides the job description for the position they want to apply for.

HireReady uses the job description to understand:

* Required skills  
* Preferred skills  
* Experience requirements  
* Educational requirements  
* Responsibilities  
* Other important qualifications

---

## **Feature 3: CV & Job Analysis**

This is the **core feature of HireReady**.

HireReady compares the user's CV with the job description and provides a clear explanation of how well the application fits the role.

### **Strong Matches**

Show things from the user's CV that are relevant to the job.

For example:

> **Skills you already have**

> * Python  
> * Git  
> * Problem solving

> **Relevant experience**

> * Software development project  
> * Previous internship

### **Areas to Improve**

Identify areas where the CV could be stronger.

For example:

> **Skills not clearly shown in your CV**

> * SQL  
> * REST APIs

> **Experience that could be explained better**

> * Your software project doesn't clearly explain what you contributed.

The purpose is to give the user **useful explanations**, not simply a number or rating.

---

# **5\. Feature 4: CV Improvement Suggestions**

HireReady provides specific suggestions for improving the user's CV based on the job description.

For example:

**Current:**

> Worked on software projects.

**Suggested improvement:**

> Developed Python applications and used Git for version control.

HireReady should explain **what needs improvement and why**.

The user should be able to review the suggestions before applying them.

### **Important rule**

HireReady must **not invent experience, qualifications, skills, or achievements** that the user does not have.

---

# **6\. Feature 5: Tailored CV**

The user can ask HireReady to create a version of their CV tailored to the specific job.

The tailored CV should:

* Highlight relevant experience  
* Emphasize relevant skills  
* Improve unclear descriptions  
* Use relevant information from the job description  
* Keep the user's information truthful

The user should be able to review the tailored CV before using it.

---

# **7\. Feature 6: Cover Letter**

HireReady generates a personalized cover letter using:

* The user's CV  
* The job description  
* Their relevant skills  
* Their relevant experience

The user can review and edit the cover letter before using it.

---

# **8\. Feature 7: Interview Preparation**

After preparing their application, the user can select:

> **Prepare for Interview**

HireReady generates questions based on:

* The specific job  
* The job description  
* The user's experience  
* Their skills

The user can practice answering the questions and receive suggestions for improving their answers.

For the MVP, this should focus on **text-based interview preparation** rather than a complicated simulated video interview.

---

# **9\. Results & Application Workspace**

After analyzing their CV, the user should have a simple workspace where they can access:

* CV analysis  
* Strengths  
* Areas to improve  
* CV suggestions  
* Tailored CV  
* Cover letter  
* Interview preparation

This gives the user one place to manage their application.

---

# **10\. What HireReady Should NOT Include in the MVP**

To keep the first version manageable, HireReady should **not** include:

* Job searching  
* Automatic job applications  
* LinkedIn integration  
* LinkedIn profile optimization  
* AI video interviews  
* Job recommendations  
* Courses  
* Application tracking  
* Salary predictions  
* Recruitment marketplace  
* Social/community features

These can be considered for future versions.

---

# **11\. MVP Feature Priority**

### **Must Have**

1. **CV upload**  
2. **Job description input**  
3. **CV & job analysis**  
4. **Strengths and areas to improve**  
5. **CV improvement suggestions**

### **Should Have**

6. **Tailored CV**  
7. **Cover letter**

### **Nice to Have**

8. **Interview preparation**

If development time becomes limited, the first five features should remain the priority because they form the core of HireReady.

---

# **12\. Example User Journey**

A user wants to apply for a **Junior Data Analyst** position.

### **Step 1 — Upload CV**

The user uploads their CV.

### **Step 2 — Add Job Description**

They paste the job description.

### **Step 3 — HireReady analyzes both**

HireReady identifies:

**Strong matches**

* Excel  
* Data analysis  
* Problem solving

**Areas to improve**

* SQL isn't clearly shown  
* Power BI isn't mentioned  
* Previous data-analysis experience needs more detail

### **Step 4 — Improve CV**

HireReady suggests specific improvements.

The user reviews and accepts the changes they want.

### **Step 5 — Create application**

HireReady creates:

* A tailored CV  
* A personalized cover letter

### **Step 6 — Prepare for interview**

HireReady generates questions relevant to the position and the user's background.

The user is now ready to apply.

---

# **13\. Core Value Proposition**

> **HireReady helps job seekers understand how their CV fits a specific job, improve their application, and prepare for the interview.**

### **MVP Goal**

> **HireReady should enable a job seeker to upload their CV, provide a job description, understand their strengths and gaps, improve their application, and prepare for the interview.**

