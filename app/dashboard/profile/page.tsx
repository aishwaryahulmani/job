// "use client"
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Textarea } from "@/components/ui/textarea";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// export default function ProfilePage() {
//   const [user, setUser] = useState<any>(null);
//   const [formData, setFormData] = useState<any>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     location: "",
//     summary: "",
//     // resume: "",
//     // skills: "",
//     // jobPreferences: "",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       const decoded = jwtDecode(token);
//       const userId = decoded.id;
//       axios
//         .get("http://localhost:5001/api/auth/getUserProfile", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => {
//           setUser(res.data);
//           setFormData(res.data);  // Populate the form data with existing user info
//         })
//         .catch((err) => {
//           console.error("Failed to fetch user data:", err);
//         });
//     }
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSaveChanges = () => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       axios
//         .put(
//           "http://localhost:5001/api/auth/updateUserProfile",
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         )
//         .then((res) => {
//           console.log("Profile updated:", res.data);
//           alert("Profile updated successfully");
//           setUser(res.data.user); // Update the local user state with the new data
//         })
//         .catch((err) => {
//           console.error("Failed to update profile:", err);
//         });
//     }
//   };

//   const uploadResume = () => {
//     const token = localStorage.getItem("authToken");
//     const resumeFile = formData.resume;
  
//     if (!resumeFile) {
//       alert("Please select a resume file first.");
//       return;
//     }
  
//     const formDataToSend = new FormData();
//     formDataToSend.append("resume", resumeFile);
  
//     axios
//       .put("http://localhost:5001/api/auth/uploadResume", formDataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         alert("Resume uploaded successfully!");
//         setUser(res.data.user);
//       })
//       .catch((err) => {
//         console.error("Resume upload failed:", err);
//         alert("Failed to upload resume.");
//       });
//   };
  

//   if (!user) {
//     return <div>Loading...</div>; // Show loading while decoding or fetching user data
//   }

//   return (
//     <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
//       <div className="flex items-center justify-between space-y-2">
//         <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
//         <div className="flex items-center space-x-2">
//           <Button onClick={handleSaveChanges}>Save Changes</Button>
//         </div>
//       </div>
//       <Tabs defaultValue="personal" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="personal">Personal Info</TabsTrigger>
//           <TabsTrigger value="resume">Resume</TabsTrigger>
//           <TabsTrigger value="skills">Skills & Tech Stack</TabsTrigger>
//           {/* <TabsTrigger value="preferences">Job Preferences</TabsTrigger> */}
//         </TabsList>

//         {/* Personal Information Tab */}
//         <TabsContent value="personal" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Personal Information</CardTitle>
//               <CardDescription>Update your personal details</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="first-name">First name</Label>
//                   <Input
//                     id="first-name"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="last-name">Last name</Label>
//                   <Input
//                     id="last-name"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="location">Location</Label>
//                 <Input
//                   id="location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="summary">Professional Summary</Label>
//                 <Textarea
//                   id="summary"
//                   name="summary"
//                   rows={4}
//                   value={formData.summary}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Resume Tab */}
//         <TabsContent value="resume" className="space-y-4">
//   <Card>
//     <CardHeader>
//       <CardTitle>Resume</CardTitle>
//       <CardDescription>Upload your resume</CardDescription>
//     </CardHeader>
//     <CardContent className="space-y-4">
//       <div className="space-y-2">
//         <Label htmlFor="resume">Resume (PDF or Word)</Label>
//         <Input
//           id="resume"
//           name="resume"
//           type="file"
//           accept=".pdf,.doc,.docx"
//           onChange={(e) =>
//             setFormData({ ...formData, resume: e.target.files?.[0] })
//           }
//         />
//         <Button className="mt-2" onClick={uploadResume}>
//           Upload Resume
//         </Button>
//       </div>
//     </CardContent>
//   </Card>
// </TabsContent>


//         {/* Skills & Tech Stack Tab */}
//         <TabsContent value="skills" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Skills & Tech Stack</CardTitle>
//               <CardDescription>List your skills and technologies</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="skills">Skills</Label>
//                 <Textarea
//                   id="skills"
//                   name="skills"
//                   rows={4}
//                   value={formData.skills}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Job Preferences Tab */}
//         {/* <TabsContent value="preferences" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Job Preferences</CardTitle>
//               <CardDescription>Update your job preferences</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="jobPreferences">Job Preferences</Label>
//                 <Textarea
//                   id="jobPreferences"
//                   name="jobPreferences"
//                   rows={4}
//                   value={formData.jobPreferences}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent> */}
//       </Tabs>
//     </div>
//   );
// }
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    // resume: "",
    skills: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded.id;
      axios
        .get("http://localhost:5001/api/auth/getUserProfile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          setFormData(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch user data:", err);
        });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .put("http://localhost:5001/api/auth/updateUserProfile", formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          alert("Profile updated successfully");
          setUser(res.data.user);
        })
        .catch((err) => {
          console.error("Failed to update profile:", err);
        });
    }
  };

  const uploadResume = () => {
    const token = localStorage.getItem("authToken");
    const resumeFile = formData.resume;

    if (!resumeFile) {
      alert("Please select a resume file first.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("resume", resumeFile);

    axios
      .put("http://localhost:5001/api/auth/uploadResume", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Resume uploaded successfully!");
        setUser(res.data.user);
      })
      .catch((err) => {
        console.error("Resume upload failed:", err);
        alert("Failed to upload resume.");
      });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>

      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="skills">Skills & Tech Stack</TabsTrigger>
          <TabsTrigger value="qrcode">QR Code</TabsTrigger>
        </TabsList>

        {/* Personal Info */}
        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  rows={4}
                  value={formData.summary}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resume */}
        <TabsContent value="resume" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>Upload your resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resume">Resume (PDF or Word)</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setFormData({ ...formData, resume: e.target.files?.[0] })
                  }
                />
                <Button className="mt-2" onClick={uploadResume}>
                  Upload Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills */}
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Tech Stack</CardTitle>
              <CardDescription>List your skills and technologies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea
                  id="skills"
                  name="skills"
                  rows={4}
                  value={formData.skills}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* QR Code Tab */}
        <TabsContent value="qrcode" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile QR Code</CardTitle>
              <CardDescription>Scan to open your public profile</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <QRCodeDisplay userId={user._id} />
              <Button
                onClick={() =>
                  navigator.clipboard.writeText(
                    `https://profile-hosting-dl9r1rxts-aishwaryahulmanis-projects.vercel.app/?id=${user._id}`
                  )
                }
              >
                Copy Profile URL
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ✅ Component to fetch and show QR image from backend
function QRCodeDisplay({ userId }: { userId: string }) {
  const [qrImage, setQrImage] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/auth/qrcode/${userId}`)
      .then((res) => {
        setQrImage(res.data.qrCode);
      })
      .catch((err) => {
        console.error("Failed to fetch QR code:", err);
      });
  }, [userId]);

  if (!qrImage) return <div>Loading QR Code...</div>;

  return <img src={qrImage} alt="QR Code" className="w-48 h-48 rounded-lg shadow" />;
}
