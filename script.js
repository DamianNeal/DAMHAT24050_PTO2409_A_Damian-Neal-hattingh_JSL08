// Variable to hold the single instance of BankBranch
let bankBranchInstance = null;

// Define the BankBranch class implementing the Singleton pattern
class BankBranch {
    constructor(branchInfo) {
        // Check if an instance already exists
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo; // Store branch information in the instance
            bankBranchInstance = this; // Assign this instance to the singleton variable
        }
        return bankBranchInstance; // Return the existing instance
    }

    // Method to retrieve branch information
    getBranchInfo() {
        return this.branchInfo;
    }
}

// Function to create a new bank branch
function createBranch(info) {
    const branch = new BankBranch(info); // Attempt to create a new instance of BankBranch
    document.getElementById("branchInfo").innerText = branch.getBranchInfo(); // Update the UI with branch information
    compareInstances(); // Verify whether Singleton is working correctly
}

// Function to compare two branch instances and verify Singleton behavior
function compareInstances() {
    const branchA = new BankBranch("Branch A - Dummy Data"); // Create first instance
    const branchB = new BankBranch("Branch B - Dummy Data"); // Attempt to create second instance
    
    // Compare instances - If Singleton is working, both should be the same
    document.getElementById("comparisonResult").innerText = 
        branchA === branchB ? "Both instances are the same (Singleton Pattern confirmed)" : "Different instances (Singleton Pattern failed)";
}

// Function to reset the Singleton instance, allowing a new instance to be created
function resetBranch() {
    bankBranchInstance = null; // Reset the singleton instance variable
    document.getElementById("branchInfo").innerText = "Not set"; // Update UI to reflect reset state
    document.getElementById("comparisonResult").innerText = "Singleton instance reset!"; // Notify user
}