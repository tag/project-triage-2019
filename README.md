
# Our Project: Build a hospital triage system.

For simplicity, assume that patient data is stored (mostly) in another system.
Only basic identifying information will be in this system: Name, DOB, sex at
birth, and a patient GUID to match the record to the other system.

When a patient visits, a single text field for symptom description is
sufficient. The patient is assigned a triage priority, then waits for an
doctor to become available. Patients are seen in priority order.

When a doctor is finished treating a patient, s/he assigns the completion reason
(one of discharged, admitted, deceased), and the visit is stored in a
historical log.


### `.dockerignore` File
Read the following [explaition of the `.dockerignore` file](https://blog.codeship.com/leveraging-the-dockerignore-file-to-create-smaller-images/)
Create a `.dockerignore` file with at least the following

    .*
    docker-compose.yml
    *.md
