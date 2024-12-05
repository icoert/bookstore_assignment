import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateUser } from "../store/slices/userSlice";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

export const UserProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    alert("Profile updated successfully!");
  };

  const getInitials = () => {
    const initials = formData.firstName.charAt(0) + formData.lastName.charAt(0);
    return initials.toUpperCase();
  };

  return (
    <div className="p-4">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4">
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Avatar and User Info */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
              {getInitials()}
            </div>
            <p className="text-lg">
              {formData.firstName} {formData.lastName}
            </p>
          </div>

          {/* User Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstName">First Name:</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name:</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth:</Label>
              <Input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
