# MSIS Project
This repo is for an in-class project in the MSIS program.

## Our Project: Build a hospital triage system

For simplicity, assume that patient data is stored (mostly) in another system.
Only basic identifying information will be in this system: Name, DOB, sex at
birth, and a patient GUID to match the record to the other system.

When a patient visits, a single text field for symptom description is
sufficient. The patient is assigned a triage priority, then waits for an
doctor to become available. Patients are seen in priority order.

When a doctor is finished treating a patient, s/he assigns the completion reason
(one of discharged, admitted, deceased), and the visit is stored in a
historical log.
